
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-gray-800">ROI Calculator</h1>
      <nav className="mt-6">
        <ul className="flex space-x-6">
          <li><Link href="/forms/roi_calculator" className="text-lg text-blue-600 hover:underline">Calculate ROI</Link></li>
          <li><Link href="/forms/roi_view" className="text-lg text-blue-600 hover:underline">View ROI Data</Link></li>
          <li><Link href="/forms/roi_anomaly" className="text-lg text-blue-600 hover:underline">Detect Anomalies</Link></li>
        </ul>
      </nav>
    </div>
  );
}
