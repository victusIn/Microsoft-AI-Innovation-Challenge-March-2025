
import azure.functions as func
from azure.storage.blob import BlobServiceClient
import os
import json
from datetime import datetime
import requests

app = func.FunctionApp()

# Load Azure configurations from environment variables
CONNECTION_STRING = os.getenv("AzureWebJobsStorage")
CONTAINER_NAME = "roivolutionblobcnt"
ANOMALY_DETECTOR_ENDPOINT = os.getenv("AnomalyDetectorEndpoint")
ANOMALY_DETECTOR_KEY = os.getenv("AnomalyDetectorKey")


# ==========================
# CORS Preflight Handling
# ==========================
def handle_cors():
    return func.HttpResponse(
        "",
        status_code=200,
        headers={
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Credentials": "true"
        }
    )


# ==============================
# ROI Calculation and Storage
# ==============================
@app.function_name(name="calculate_roi")
@app.route(route="calculateROI", methods=["POST", "OPTIONS"])
def calculate_roi(req: func.HttpRequest) -> func.HttpResponse:
    # Handle CORS preflight request
    if req.method == "OPTIONS":
        return handle_cors()

    try:
        req_body = req.get_json()

        # Extract user inputs
        project_budget = req_body.get("project_budget")
        employee_impact = req_body.get("employee_impact")
        project_duration = req_body.get("project_duration")
        avg_salary = req_body.get("average_salary")
        risk_level = req_body.get("risk_level")
        industry_type = req_body.get("industry_type")

        prev_success = req_body.get("previous_success")
        leadership = req_body.get("leadership_alignment")
        employee_readiness = req_body.get("employee_readiness")
        comm_plan = req_body.get("communication_plan")
        training_budget = req_body.get("training_budget")

        # Validate input
        if None in (project_budget, employee_impact, project_duration, avg_salary, risk_level,
                    industry_type, prev_success, leadership, employee_readiness, comm_plan, training_budget):
            return func.HttpResponse(json.dumps({"error": "Missing input fields"}), status_code=400,
                                    headers={"Access-Control-Allow-Origin": "*"}
                                     )
        

        # Compute expected success rate (weighted factors)
        readiness_score = (leadership + employee_readiness + comm_plan) / 15  # Normalize
        expected_success = prev_success * readiness_score

        # Compute net benefit & ROI
        productivity_gain = employee_impact * avg_salary * project_duration
        net_benefit = (productivity_gain * (expected_success / 100)) - project_budget
        roi = (net_benefit / project_budget) * 100

        # Store results in Azure Blob Storage
        blob_service_client = BlobServiceClient.from_connection_string(CONNECTION_STRING)
        blob_client = blob_service_client.get_blob_client(container=CONTAINER_NAME, blob="roi_data.json")

        try:
            existing_data = json.loads(blob_client.download_blob().readall().decode("utf-8"))
        except:
            existing_data = []

        new_entry = {
            "project_budget": project_budget,
            "net_benefit": net_benefit,
            "roi": roi,
            "expected_success": expected_success,
            "industry_type": industry_type,
            "project_duration": project_duration,
            "timestamp": str(datetime.now())
        }
        existing_data.append(new_entry)

        blob_client.upload_blob(json.dumps(existing_data), overwrite=True)

        return func.HttpResponse(json.dumps({
            "roi": roi,
            "net_benefit": net_benefit,
            "expected_success": expected_success,
            "industry_type": industry_type,
            "project_duration": project_duration
        }), status_code=200, headers={"Access-Control-Allow-Origin": "*"})

    except Exception as e:
        return func.HttpResponse(json.dumps({"error": str(e)}), status_code=500,
                                  headers={
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization"
            }
                                 )


# ==============================
# Retrieve ROI Data
# ==============================
@app.function_name(name="get_roi_data")
@app.route(route="getROI", methods=["GET", "OPTIONS"])
def get_roi_data(req: func.HttpRequest) -> func.HttpResponse:
    # Handle CORS preflight request
    if req.method == "OPTIONS":
        return handle_cors()

    try:
        blob_service_client = BlobServiceClient.from_connection_string(CONNECTION_STRING)
        blob_client = blob_service_client.get_blob_client(container=CONTAINER_NAME, blob="roi_data.json")

        data = json.loads(blob_client.download_blob().readall().decode("utf-8"))

        return func.HttpResponse(json.dumps({"roi_data": data}), status_code=200,
                                 headers={"Access-Control-Allow-Origin": "*"})

    except Exception as e:
        return func.HttpResponse(json.dumps({"error": str(e)}), status_code=500,
                                 headers={"Access-Control-Allow-Origin": "*"}
                                 )


# ==============================
# Anomaly Detection with Azure
# ==============================
@app.function_name(name="detect_anomalies")
@app.route(route="detectAnomalies", methods=["GET", "OPTIONS"])
def detect_anomalies(req: func.HttpRequest) -> func.HttpResponse:
    # Handle CORS preflight request
    if req.method == "OPTIONS":
        return handle_cors()

    try:
        blob_service_client = BlobServiceClient.from_connection_string(CONNECTION_STRING)
        blob_client = blob_service_client.get_blob_client(container=CONTAINER_NAME, blob="roi_data.json")

        data = json.loads(blob_client.download_blob().readall().decode("utf-8"))

        # Prepare data for Azure Anomaly Detector
        request_data = {
            "series": [{"timestamp": entry["timestamp"], "value": entry["roi"]} for entry in data],
        }

        headers = {
            "Content-Type": "application/json",
            "Ocp-Apim-Subscription-Key": ANOMALY_DETECTOR_KEY
        }

        response = requests.post(
            f"{ANOMALY_DETECTOR_ENDPOINT}/anomalydetector/v1.1/timeseries/entire/detect",
            headers=headers,
            json=request_data
        )

        if response.status_code != 200:
            return func.HttpResponse(json.dumps({"error": "Anomaly Detector API failed"}), 
                                     status_code=response.status_code,
                                     headers={"Access-Control-Allow-Origin": "*"})

        result = response.json()

        # Filter only the anomalies and include all original fields
        anomalies = [
            {**data[i], "isAnomaly": True}  # Merge all fields from data[i]
            for i, is_anomaly in enumerate(result.get("isAnomaly", []))
            if is_anomaly
        ]

        return func.HttpResponse(json.dumps({"anomalies": anomalies}), status_code=200,
                                 headers={"Access-Control-Allow-Origin": "*"})

    except Exception as e:
        return func.HttpResponse(json.dumps({"error": str(e)}), status_code=500,
                                 headers={"Access-Control-Allow-Origin": "*"})

