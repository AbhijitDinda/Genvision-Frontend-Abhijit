import React from "react";
import { useNavigate } from "react-router-dom";

const assignments = [
  {
    id: 1,
    subject: "Mathematics",
    teacher: "John Doe",
    marks: 85,
    date: "2024-11-15",
    status: "Submitted",
  },
  {
    id: 2,
    subject: "Science",
    teacher: "Jane Smith",
    marks: 90,
    date: "2024-11-12",
    status: "Late Submission",
  },
  {
    id: 3,
    subject: "English",
    teacher: "Sam Wilson",
    marks: 78,
    date: "2024-11-10",
    status: "Submitted",
  },
  {
    id: 4,
    subject: "History",
    teacher: "Mary Brown",
    marks: 88,
    date: "2024-11-08",
    status: "Submitted",
  },
];

const Assignments: React.FC = () => {
  const navigate = useNavigate();

  const handleViewPaper = (id: number) => {
    navigate(`/parent/assignments/${id}`); // Navigate to the assignment paper page
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="w-full bg-white shadow-lg rounded-lg">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">Student Past Assignments</h1>
          <p className="mt-2 text-gray-600">Review the past assignments and grades</p>
        </div>

        {/* Table */}
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-4 px-6 text-left font-semibold text-sm uppercase">Subject</th>
              <th className="py-4 px-6 text-left font-semibold text-sm uppercase">Teacher</th>
              <th className="py-4 px-6 text-left font-semibold text-sm uppercase">Marks</th>
              <th className="py-4 px-6 text-left font-semibold text-sm uppercase">Date</th>
              <th className="py-4 px-6 text-left font-semibold text-sm uppercase">Status</th>
              <th className="py-4 px-6 text-left font-semibold text-sm uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment, index) => (
              <tr
                key={assignment.id}
                className={`border-t ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="py-4 px-6 text-gray-800">{assignment.subject}</td>
                <td className="py-4 px-6 text-gray-800">{assignment.teacher}</td>
                <td className="py-4 px-6 text-gray-800">{assignment.marks}</td>
                <td className="py-4 px-6 text-gray-800">{assignment.date}</td>
                <td
                  className={`py-4 px-6 text-sm font-semibold ${
                    assignment.status === "Submitted"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {assignment.status}
                </td>
                <td className="py-4 px-6">
                  <button
                    onClick={() => handleViewPaper(assignment.id)}
                    className="text-blue-600 hover:underline"
                  >
                    See Assignment Paper
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Assignments;
