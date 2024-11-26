import { useParams } from "react-router-dom";

const TeacherProfile: React.FC = () => {
  const { id } = useParams();

  const teachers = [
    {
      id: "1",
      name: "Mr. Alan Brown",
      subject: "Mathematics",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      description: "Experienced mathematics teacher with a passion for problem-solving.",
    },
    {
      id: "2",
      name: "Ms. Linda Green",
      subject: "English",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      description: "Literature enthusiast with a focus on English composition.",
    },
    // Add other teachers here...
  ];

  const teacher = teachers.find((teacher) => teacher.id === id);

  if (!teacher) return <p>Teacher not found!</p>;

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <img src={teacher.image} alt={teacher.name} className="w-32 h-32 rounded-full mx-auto" />
      <h1 className="text-2xl font-semibold text-center mt-4">{teacher.name}</h1>
      <p className="text-center text-gray-500">{teacher.subject}</p>
      <p className="mt-4">{teacher.description}</p>
    </div>
  );
};

export default TeacherProfile;
