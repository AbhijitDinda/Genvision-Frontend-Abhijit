// AdmissionStats.tsx
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const AdmissionStats = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May"], // Example months
    datasets: [
      {
        label: "Number of Students",
        data: [200, 250, 270, 300, 350], // Example student counts
        backgroundColor: "rgba(75,192,192,0.5)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Admission Stats Over Time",
      },
    },
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Admission Statistics</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default AdmissionStats;
