// TeacherList.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

// Define the teacher interface
interface Teacher {
  id: number;
  name: string;
  subject: string;
  email: string;
  bio: string;
  photo: string;
}

// Mock Data for Teachers
const teachers: Teacher[] = Array.from({ length: 30 }, (_, index) => ({
  id: index + 1,
  name: `Teacher ${index + 1}`,
  subject: `Subject ${index % 5 === 0 ? "Mathematics" : "Science"}`,
  email: `teacher${index + 1}@example.com`,
  bio: `This is the biography of Teacher ${index + 1}. They specialize in teaching ${
    index % 5 === 0 ? "Mathematics" : "Science"
  } and have over ${5 + index} years of experience.`,
  photo: `https://i.pravatar.cc/100?img=${index + 1}`, // Placeholder profile photo
}));

const TeacherList: React.FC = () => {
  const navigate = useNavigate();

  const handleRowClick = (id: number) => {
    navigate(`/parent/teachers/profile/${id}`); // Navigate to the teacher's profile page
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="w-ful bg-white shadow-lg rounded-lg">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">Teacher List</h1>
          <p className="mt-2 text-gray-600">Click on a teacher to view their profile</p>
        </div>

        {/* Table */}
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-4 px-6 text-left font-semibold text-sm uppercase">ID</th>
              <th className="py-4 px-6 text-left font-semibold text-sm uppercase">Name</th>
              <th className="py-4 px-6 text-left font-semibold text-sm uppercase">Subject</th>
              <th className="py-4 px-6 text-left font-semibold text-sm uppercase">Email</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => (
              <tr
                key={teacher.id}
                onClick={() => handleRowClick(teacher.id)}
                className={`cursor-pointer border-t ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="py-4 px-6 text-gray-800 font-medium">{teacher.id}</td>
                <td className="py-4 px-6 text-gray-800">{teacher.name}</td>
                <td className="py-4 px-6 text-gray-800">{teacher.subject}</td>
                <td className="py-4 px-6 text-gray-800">
                  <a href={`mailto:${teacher.email}`} className="text-black hover:underline">
                    {teacher.email}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherList;
