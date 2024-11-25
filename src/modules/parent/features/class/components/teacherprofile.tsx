// TeacherProfile.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";

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
const teachers: Teacher[] = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: `Teacher ${index + 1}`,
  subject: `Subject ${index % 5 === 0 ? "Mathematics" : "Science"}`,
  email: `teacher${index + 1}@example.com`,
  bio: `This is the biography of Teacher ${index + 1}. They specialize in teaching ${
    index % 5 === 0 ? "Mathematics" : "Science"
  } and have over ${5 + index} years of experience.`,
  photo: `https://i.pravatar.cc/100?img=${index + 1}`, // Placeholder profile photo
}));

const TeacherProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const teacher = teachers.find((t) => t.id === Number(id));

  if (!teacher) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Teacher not found.</p>
        <Link to="/" className="ml-4 text-blue-500 underline">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100  p-6">
      <div className="w-full bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-4">
          <img
            src={teacher.photo}
            alt={`${teacher.name}'s profile`}
            className="w-24 h-24 rounded-full mr-6 border"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{teacher.name}</h1>
            <p className="text-gray-600">{teacher.subject}</p>
            <a href={`mailto:${teacher.email}`} className="text-black hover:underline mt-2 block">
              {teacher.email}
            </a>
          </div>
        </div>
        <p className="text-gray-600">{teacher.bio}</p>
        <Link
          to="/parent/teachers"
          className="mt-4 inline-block bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
        >
          Back to Teacher List
        </Link>
      </div>
    </div>
  );
};

export default TeacherProfile;
