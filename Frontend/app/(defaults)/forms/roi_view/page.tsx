// // View ROI Data Page
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
interface ROIResultItem {
    project_budget?: number;
    net_benefit?: number;
    roi?: number;
    expected_success?: number;
    industry_type?:any;
    project_duration?:any;
  }

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://roimyfunctionapp.azurewebsites.net/api/calculateROI"
    : "http://localhost:7071/api/getROI";

export default function ViewROI() {
    const [data, setData] = useState<ROIResultItem[]>([]);


    useEffect(() => {
        axios.get(API_URL)
            .then((res) => setData(res.data.roi_data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="p-6 max-w-5xl mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-4">ROI Data</h2>

            {data.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                               
                                <th className="border border-gray-300 p-2">Project Budget</th>
                                <th className="border border-gray-300 p-2">Net Benefit</th>
                                <th className="border border-gray-300 p-2">ROI (%)</th>
                                <th className="border border-gray-300 p-2">Expected Success (%)</th>
                                <th className="border border-gray-300 p-2">Industry</th>
                                <th className="border border-gray-300 p-2">Duration (Months)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index} className="text-gray-800">
                                   
                                    <td className="border border-gray-300 p-2">${item.project_budget?.toLocaleString() || "N/A"}</td>
                                    <td className="border border-gray-300 p-2">${item.net_benefit?.toLocaleString() || "N/A"}</td>
                                    <td className="border border-gray-300 p-2">{item.roi?.toFixed(2) || "N/A"}%</td>
                                    <td className="border border-gray-300 p-2">{item.expected_success?.toFixed(2) || "N/A"}%</td>
                                    <td className="border border-gray-300 p-2">{item.industry_type || "N/A"}</td>
                                    <td className="border border-gray-300 p-2">{item.project_duration || "N/A"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-gray-500 text-center mt-4">No ROI data available.</p>
            )}
        </div>
    );
}


