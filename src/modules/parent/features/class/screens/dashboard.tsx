import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const studentsRanking = [
  { id: 1, name: "John Doe", score: 95 },
  { id: 2, name: "Jane Smith", score: 90 },
  { id: 3, name: "Sam Wilson", score: 85 },
  { id: 4, name: "Abhijit Dinda", score: 80 }, // Highlighted student
  { id: 5, name: "Mary Brown", score: 75 },
];

const loggedInStudentId = 4; // Highlighting the logged-in student

const DashboardAnalysis: React.FC = () => {
  const assignmentsSubmitted = 18;
  const totalAssignments = 20;
  const submissionPercentage = Math.round((assignmentsSubmitted / totalAssignments) * 100);

  const attendancePercentage = 92;

  const assignmentsBarData = {
    labels: ["Math", "Science", "History", "English", "Art"],
    datasets: [
      {
        label: "Assignments Submitted",
        data: [18, 19, 17, 20, 15],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderRadius: 5,
      },
    ],
  };

  const attendanceLineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        label: "Attendance (%)",
        data: [88, 90, 85, 92, 95],
        borderColor: "#4f46e5",
        backgroundColor: "rgba(79, 70, 229, 0.3)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Analysis</h1>

        {/* Rankings Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Class Rankings</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-3 px-6 font-semibold text-gray-700">Rank</th>
                  <th className="py-3 px-6 font-semibold text-gray-700">Name</th>
                  <th className="py-3 px-6 font-semibold text-gray-700">Score</th>
                </tr>
              </thead>
              <tbody>
                {studentsRanking.map((student, index) => (
                  <tr
                    key={student.id}
                    className={`${
                      student.id === loggedInStudentId ? "bg-yellow-100" : "bg-white"
                    } border-t hover:bg-gray-50`}
                  >
                    <td className="py-3 px-6">{index + 1}</td>
                    <td className="py-3 px-6">{student.name}</td>
                    <td className="py-3 px-6">{student.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Submission Percentage */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Assignment Submission</h2>
            <div className="flex items-center justify-between">
              <p className="text-gray-600">{submissionPercentage}% Submitted</p>
              <div className="relative w-3/4 h-4 bg-gray-200 rounded-full">
                <div
                  className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
                  style={{ width: `${submissionPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Attendance Percentage */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Class Attendance</h2>
            <div className="flex items-center justify-between">
              <p className="text-gray-600">{attendancePercentage}% Attendance</p>
              <div className="relative w-3/4 h-4 bg-gray-200 rounded-full">
                <div
                  className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
                  style={{ width: `${attendancePercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Graphs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Assignments Overview</h3>
            <Bar data={assignmentsBarData} />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Attendance Trends</h3>
            <Line data={attendanceLineData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAnalysis;
