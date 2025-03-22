"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [anomalies, setAnomalies] = useState<any>(null);
  const [message, setMessage] = useState("");

  const API_URL = "http://localhost:7071"; // Change when deployed

  const fetchAnomalies = async () => {
    try {
      const response = await axios.get(`${API_URL}/detectAnomalies`);
      setAnomalies(response.data.anomalies);
      setMessage("Anomaly detection completed!");
    } catch (error) {
      setMessage("Error fetching anomalies.");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAnomalies();
  }, []);

  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-2xl font-bold my-4">ROI Anomaly Detection</h1>
      <button
        onClick={fetchAnomalies}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
      >
        Detect Anomalies
      </button>

      {message && <p className="text-blue-600 my-4">{message}</p>}

      {anomalies?.isAnomaly && anomalies?.timestamps ? (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Anomaly Detection Results</h2>
          <table className="w-full border-collapse border border-gray-300 mt-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Timestamp</th>
                <th className="border border-gray-300 px-4 py-2">Expected ROI</th>
                <th className="border border-gray-300 px-4 py-2">Anomaly</th>
                <th className="border border-gray-300 px-4 py-2">Severity</th>
              </tr>
            </thead>
            <tbody>
              {anomalies.timestamps.map((timestamp: string, index: number) => (
                <tr
                  key={index}
                  className={anomalies.isAnomaly[index] ? "bg-red-200" : "bg-green-200"}
                >
                  <td className="border border-gray-300 px-4 py-2">{timestamp}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {anomalies.expectedValues[index]?.toFixed(2) || "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {anomalies.isAnomaly[index] ? "⚠️ Yes" : "✅ No"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {anomalies.severity[index]?.toFixed(2) || "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600 mt-4">No anomaly data available.</p>
      )}
    </div>
  );
}



