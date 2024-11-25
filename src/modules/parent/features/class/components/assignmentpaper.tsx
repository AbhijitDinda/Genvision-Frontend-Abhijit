import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const mockPapers = [
  {
    id: 1,
    title: "Mathematics Assignment",
    content: "Solve the following equations...",
    teacher: "John Doe",
    questions: [
      {
        question: "What is 2 + 2?",
        correctAnswer: "4",
        studentAnswer: "4",
        marks: 5,
      },
      {
        question: "What is 5 x 6?",
        correctAnswer: "30",
        studentAnswer: "28",
        marks: 5,
      },
    ],
  },
  {
    id: 2,
    title: "Science Assignment",
    content: "Explain Newton's Laws of Motion...",
    teacher: "Jane Smith",
    questions: [
      {
        question: "State Newton's First Law.",
        correctAnswer: "An object remains in uniform motion unless acted upon by a force.",
        studentAnswer: "An object in motion stays in motion unless acted upon by a force.",
        marks: 10,
      },
      {
        question: "What is the formula for force?",
        correctAnswer: "F = ma",
        studentAnswer: "F = ma",
        marks: 5,
      },
    ],
  },
];

const AssignmentPaper: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const paper = mockPapers.find((p) => p.id === parseInt(id || "", 10));

  if (!paper) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl text-red-600">Assignment Not Found</h1>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800">{paper.title}</h1>
        <p className="mt-4 text-gray-600">Assigned by: {paper.teacher}</p>
        <p className="mt-6 text-gray-800">{paper.content}</p>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Questions</h2>
          <div className="mt-4">
            {paper.questions.map((q, index) => (
              <div
                key={index}
                className="p-4 mb-4 bg-gray-50 border border-gray-200 rounded-lg"
              >
                <p className="text-gray-800 font-medium">
                  Q{index + 1}: {q.question}
                </p>
                <p className="mt-2 text-gray-600">
                  <strong>Correct Answer:</strong> {q.correctAnswer}
                </p>
                <p className="mt-2 text-gray-600">
                  <strong>Student Answer:</strong> {q.studentAnswer}
                </p>
                <p
                  className={`mt-2 font-semibold ${
                    q.correctAnswer === q.studentAnswer
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {q.correctAnswer === q.studentAnswer ? "Correct" : "Incorrect"}
                </p>
                <p className="mt-2 text-gray-600">
                  <strong>Marks:</strong> {q.marks}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Back to Assignments
        </button>
      </div>
    </div>
  );
};

export default AssignmentPaper;
