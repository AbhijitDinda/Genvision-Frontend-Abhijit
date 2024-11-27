import { useParams, Link } from "react-router-dom";

const StudentProfile: React.FC = () => {
  const { id } = useParams();

  const students = [
    {
      id: "1",
      name: "John Doe",
      grade: "A",
      class: "10th Grade",
      rollNo: "21",
      ranking: "1st",
      marks: "95%",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      bio: "A dedicated student with a passion for mathematics and science.",
      parentId: "p1",
    },
    {
      id: "2",
      name: "Jane Smith",
      grade: "B",
      class: "9th Grade",
      rollNo: "34",
      ranking: "3rd",
      marks: "85%",
      image: "https://randomuser.me/api/portraits/women/23.jpg",
      bio: "A creative thinker with a love for art and literature.",
      parentId: "p2",
    },
  ];

  const student = students.find((student) => student.id === id);

  if (!student)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-xl font-semibold text-red-500">Student not found!</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center p-6">
          <img
            src={student.image}
            alt={student.name}
            className="w-32 h-32 rounded-full shadow-md mb-4"
          />
          <h1 className="text-2xl font-bold">{student.name}</h1>
          <p className="text-lg text-gray-600">{student.class}</p>
          <p className="text-sm text-gray-500 italic mt-2">{student.bio}</p>
        </div>
        <div className="border-t border-gray-300 p-6">
          <div className="flex justify-between py-2">
            <span className="font-medium text-gray-700">Grade:</span>
            <span className="text-gray-600">{student.grade}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-medium text-gray-700">Roll Number:</span>
            <span className="text-gray-600">{student.rollNo}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-medium text-gray-700">Ranking:</span>
            <span className="text-gray-600">{student.ranking}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-medium text-gray-700">Marks:</span>
            <span className="text-gray-600">{student.marks}</span>
          </div>
        </div>
        <div className="border-t border-gray-300 p-6 text-center">
          <Link
            to={`parent-profile/${student.parentId}`}
            className="inline-flex items-center text-blue-500 hover:text-blue-700 font-semibold"
          >
            <img
              src="https://randomuser.me/api/portraits/men/85.jpg"
              alt="Parent Logo"
              className="w-6 h-6 mr-2 rounded-xl"
            />
            View Parent's Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
