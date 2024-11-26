// Dashboard.tsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

// Example data for school performance
const data = [
  {
    name: "School A",
    performance: 80,
  },
  {
    name: "School B",
    performance: 85,
  },
  {
    name: "School C",
    performance: 90,
  },
  {
    name: "School D",
    performance: 75,
  },
  {
    name: "School E",
    performance: 88,
  },
];

const Dashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Performance Analysis</h2>

      {/* Responsive BarChart */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="performance" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
