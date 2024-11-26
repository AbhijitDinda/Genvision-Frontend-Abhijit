// SuperAdminDashboard.tsx
import React, { useState } from "react";
import SchoolMap from "./SchoolMap"; // Import the map component
import Dashboard from "./Dashboard"; // Import the chart component
import AdmissionStats from "./AdmissionStats";
import RevenueAnalysis from "./RevenueAnalysis";
import GrowthTrends from "./GrowthTrends";

const SuperAdminDashboard = () => {
  // State to track active tab
  const [activeTab, setActiveTab] = useState("map");

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Super Admin Dashboard</h1>

      {/* Tab Navigation */}
      <div className="flex mb-6 space-x-4">
        <button
          onClick={() => setActiveTab("map")}
          className={`py-2 px-4 text-lg ${activeTab === "map" ? "bg-gray-700 text-white" : "bg-gray-200"} border rounded`}
        >
          School Locations
        </button>
        <button
          onClick={() => setActiveTab("chart")}
          className={`py-2 px-4 text-lg ${activeTab === "chart" ? "bg-gray-700 text-white" : "bg-gray-200"} border rounded`}
        >
          Performance Charts
        </button>
        <button
          onClick={() => setActiveTab("admission")}
          className={`py-2 px-4 text-lg ${activeTab === "admission" ? "bg-gray-700 text-white" : "bg-gray-200"} border rounded`}
        >
          Admission Stats
        </button>
        <button
          onClick={() => setActiveTab("revenue")}
          className={`py-2 px-4 text-lg ${activeTab === "revenue" ? "bg-gray-700 text-white" : "bg-gray-200"} border rounded`}
        >
          Revenue Analysis
        </button>
        <button
          onClick={() => setActiveTab("growth")}
          className={`py-2 px-4 text-lg ${activeTab === "growth" ? "bg-gray-700 text-white" : "bg-gray-200"} border rounded`}
        >
          Growth Trends
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "map" && <SchoolMap />}
      {activeTab === "chart" && <Dashboard />}
      {activeTab === "admission" && <AdmissionStats />}
      {activeTab === "revenue" && <RevenueAnalysis />}
      {activeTab === "growth" && <GrowthTrends />}
    </div>
  );
};

export default SuperAdminDashboard;
