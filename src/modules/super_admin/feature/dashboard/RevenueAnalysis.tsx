// RevenueAnalysis.tsx
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const RevenueAnalysis = () => {
  const data = {
    labels: ["School A", "School B", "School C"], // Example schools
    datasets: [
      {
        label: "Revenue Distribution",
        data: [100000, 150000, 120000], // Example revenue values
        backgroundColor: [
          "rgba(75,192,192,0.5)",
          "rgba(255,99,132,0.5)",
          "rgba(255,159,64,0.5)",
        ],
        borderColor: [
          "rgba(75,192,192,1)",
          "rgba(255,99,132,1)",
          "rgba(255,159,64,1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Revenue Distribution by School",
      },
    },
  };

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2 className="text-2xl font-bold mb-4">Revenue Analysis</h2>
    
        <Pie data={data} options={options} width={300} height={300} />
      
      
    </div>
  );
};

export default RevenueAnalysis;
