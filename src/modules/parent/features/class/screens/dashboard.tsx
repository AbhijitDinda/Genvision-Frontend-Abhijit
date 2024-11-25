import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const studentsRanking = [
  { id: 1, name: "John Doe", score: 95 },
  { id: 2, name: "Jane Smith", score: 90 },
  { id: 3, name: "Sam Wilson", score: 85 },
  { id: 4, name: "Abhijit Dinda", score: 80 }, // Highlighted student
  { id: 5, name: "Mary Brown", score: 75 },
];

const loggedInStudentId = 4; // Example logged-in student ID

const DashboardAnalysis: React.FC = () => {
  // Assignment Submission Percentage
  const assignmentsSubmitted = 18;
  const totalAssignments = 20;
  const submissionPercentage = Math.round((assignmentsSubmitted / totalAssignments) * 100);

  // Attendance Percentage
  const attendancePercentage = 92;

  // Bar Chart Data (Assignments)
  const assignmentsBarData = {
    labels: ["Math", "Science", "History", "English", "Art"],
    datasets: [
      {
        label: "Assignments Submitted",
        data: [18, 19, 17, 20, 15],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  // Line Chart Data (Attendance)
  const attendanceLineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        label: "Attendance Percentage",
        data: [88, 90, 85, 92, 95],
        borderColor: "rgba(53, 162, 235, 0.8)",
        backgroundColor: "rgba(53, 162, 235, 0.3)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Analysis</h1>

        {/* Rankings */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Class Rankings</h2>
          <table className="w-full table-auto mt-4 border-collapse">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="py-3 px-6 text-left font-semibold">Rank</th>
                <th className="py-3 px-6 text-left font-semibold">Name</th>
                <th className="py-3 px-6 text-left font-semibold">Score</th>
              </tr>
            </thead>
            <tbody>
              {studentsRanking.map((student, index) => (
                <tr
                  key={student.id}
                  className={`${
                    student.id === loggedInStudentId ? "bg-yellow-100" : "bg-white"
                  } border-t`}
                >
                  <td className="py-3 px-6">{index + 1}</td>
                  <td className="py-3 px-6">{student.name}</td>
                  <td className="py-3 px-6">{student.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Submission and Attendance */}
        <div className="flex flex-wrap justify-between mt-6 gap-6">
          {/* Submission Percentage */}
          <div className="w-full sm:w-1/2 bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-800">Assignment Submission</h2>
            <p className="mt-2 text-gray-600">{submissionPercentage}% Submitted</p>
            <div className="relative mt-2 w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-green-500"
                style={{ width: `${submissionPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Attendance Percentage */}
          <div className="w-full sm:w-1/2 bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-800">Class Attendance</h2>
            <p className="mt-2 text-gray-600">{attendancePercentage}% Attendance</p>
            <div className="relative mt-2 w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-blue-500"
                style={{ width: `${attendancePercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Graphs */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Visual Analysis</h2>
          <div className="flex flex-wrap justify-between mt-4 gap-6">
            {/* Assignments Bar Chart */}
            <div className="w-full sm:w-1/2 bg-gray-50 p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800">Assignments</h3>
              <Bar data={assignmentsBarData} />
            </div>

            {/* Attendance Line Chart */}
            <div className="w-full sm:w-1/2 bg-gray-50 p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800">Attendance</h3>
              <Line data={attendanceLineData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAnalysis;
