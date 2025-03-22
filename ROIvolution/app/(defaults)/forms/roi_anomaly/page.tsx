// Anomaly Detection Page
"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://roimyfunctionapp.azurewebsites.net/api/detectAnomalies"
    : "http://localhost:7071/api/detectAnomalies";

export default function DetectAnomalies() {
  const [anomalies, setAnomalies] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then((res) => setAnomalies(res.data.anomalies))
      .catch((err) => console.error("Error fetching anomalies:", err));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Detected Anomalies</h2>

      {anomalies.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left">Timestamp</th>
                <th className="px-4 py-2 text-left">ROI (%)</th>
                <th className="px-4 py-2 text-left">Industry</th>
                
                <th className="px-4 py-2 text-left">Duration (months)</th>
              </tr>
            </thead>
            <tbody>
              {anomalies.map((item, index) => (
                <tr key={index} className="border-t hover:bg-gray-100">
                  <td className="px-4 py-2">{new Date(item.timestamp).toLocaleString()}</td>
                  <td className="px-4 py-2">{item.roi.toFixed(2)}%</td>
                  <td className="px-4 py-2">{item.industry_type}</td>
                  
                  <td className="px-4 py-2">{item.project_duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600">No anomalies detected</p>
      )}
    </div>
  );
}
