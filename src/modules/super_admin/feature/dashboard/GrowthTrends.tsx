// GrowthTrends.tsx
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Example data for the chart
const data = [
  { month: "Jan", schoolA: 100, schoolB: 90 },
  { month: "Feb", schoolA: 120, schoolB: 110 },
  { month: "Mar", schoolA: 150, schoolB: 130 },
  { month: "Apr", schoolA: 180, schoolB: 160 },
  { month: "May", schoolA: 220, schoolB: 190 },
];

const GrowthTrends = () => {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2 className="text-2xl font-bold mb-4">Growth Trends</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="schoolA" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="schoolB" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GrowthTrends;
