"use client";
import { useState } from "react";
import axios from "axios";


const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://roimyfunctionapp.azurewebsites.net/api/calculateROI"
    : "http://localhost:7071/api/calculateROI";


export default function CalculateROI() {
    const [formData, setFormData] = useState({
        project_budget: "",
        employee_impact: "",
        project_duration: "",
        average_salary: "",   
        risk_level: "",
        industry_type: "",
        previous_success: "", 
        leadership_alignment: "", 
        employee_readiness: "",
        communication_plan: "", 
        training_budget: "",
    });

    const [result, setResult] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formattedData = {
            ...formData,
            project_budget: Number(formData.project_budget),
            employee_impact: Number(formData.employee_impact),
            project_duration: Number(formData.project_duration),
            average_salary: Number(formData.average_salary),
            // risk_level: Number(formData.risk_level),
            previous_success: Number(formData.previous_success),
            leadership_alignment: Number(formData.leadership_alignment),
            employee_readiness: Number(formData.employee_readiness),
            communication_plan: Number(formData.communication_plan),
            training_budget: Number(formData.training_budget),
        };

        console.log("Sending formatted data:", formattedData);

        try {
            const response = await axios.post(API_URL, formattedData);
            setResult(response.data);
            setErrorMessage(null); // Clear previous errors
        } catch (error) {
            console.error("Error calculating ROI", error.response?.data || error.message);
            setErrorMessage(error.response?.data?.error || "An error occurred while calculating ROI.");
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Calculate ROI</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Grid Layout for Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.keys(formData).map((key) => (
                    <div key={key} className="flex flex-col">
                        <label className="text-gray-700 font-medium capitalize" htmlFor={key}>
                        {key === "project_duration" ? "Project Duration (in months)" :
                        key === "previous_success" ? "Previous Success (%)" :
                         key.replace("_", " ")}
                            
                        </label>
                        
                            {key === "risk_level" ? (
                                <select
                                    id={key}
                                    name={key}
                                    value={formData[key]}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                >
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>
                            ) : key === "industry_type" ? (
                                <select
                                    id={key}
                                    name={key}
                                    value={formData[key]}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                >
                                    <option value="Technology">Technology</option>
                                    <option value="Healthcare">Healthcare</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Manufacturing">Manufacturing</option>
                                    <option value="Retail">Retail</option>
                                    <option value="Education">Education</option>
                                </select>
                            ) :["training_budget", "communication_plan", "leadership_alignment", "employee_readiness"].includes(key) ?(
                                <select
                                id={key}
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                
                            </select>
                            ):(
                                <input
                                    id={key}
                                    name={key}
                                    value={formData[key]}
                                    onChange={handleChange}
                                    placeholder={key.replace("_", " ")}
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            )}
                        </div>
                    ))
                        }
                       
                    </div>
            

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Submit
            </button>
        </form>

        {/* Error Message */}
        {errorMessage && (
            <div className="mt-4 p-3 bg-red-100 text-red-800 border border-red-400 rounded">
                <strong>Error:</strong> {errorMessage}
            </div>
        )}

       
        {result && (
    <div className="mt-6 overflow-x-auto">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">ROI Calculation Result</h3>
        <table className="w-full border-collapse border border-gray-300">
            <thead>
                <tr className="bg-gray-200 text-gray-700">
                    {Object.keys(result).map((key) => (
                        <th key={key} className="border border-gray-300 p-2 text-left capitalize">
                            {key.replace("_", " ")}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {Object.values(result).map((value, index) => (
                        <td key={index} className="border border-gray-300 p-2">
                            {typeof value === "number" ? value.toFixed(2) : value}
                        </td>
                    ))}
                </tr>
            </tbody>
        </table>
    </div>
)}
    </div>
);
    
}
