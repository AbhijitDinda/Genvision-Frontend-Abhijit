import { useParams } from "react-router-dom";

const StudentProfile: React.FC = () => {
  const { id } = useParams();

  const students = [
    {
      id: "1",
      name: "John Doe",
      grade: "A",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      bio: "A dedicated student with a passion for mathematics and science.",
    },
    {
      id: "2",
      name: "Jane Smith",
      grade: "B",
      image: "https://randomuser.me/api/portraits/women/23.jpg",
      bio: "A creative thinker with a love for art and literature.",
    },
    // Add other students here...
  ];

  const student = students.find((student) => student.id === id);

  if (!student) return <p>Student not found!</p>;

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <img src={student.image} alt={student.name} className="w-32 h-32 rounded-full mx-auto" />
      <h1 className="text-2xl font-semibold text-center mt-4">{student.name}</h1>
      <p className="text-center text-gray-500">Grade: {student.grade}</p>
      <p className="mt-4">{student.bio}</p>
    </div>
  );
};

export default StudentProfile;
