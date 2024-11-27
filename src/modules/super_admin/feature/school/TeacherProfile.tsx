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
      education: "M.Sc. in Mathematics, University of Oxford",
      email: "alan.brown@example.com",
      mobile: "+1 123-456-7890",
      experience: "10 years of teaching high school mathematics.",
    },
    {
      id: "2",
      name: "Ms. Linda Green",
      subject: "English",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      description: "Literature enthusiast with a focus on English composition.",
      education: "M.A. in English Literature, Harvard University",
      email: "linda.green@example.com",
      mobile: "+1 987-654-3210",
      experience: "8 years of teaching English literature and composition.",
    },
    // Add more teachers here...
  ];

  const teacher = teachers.find((teacher) => teacher.id === id);

  if (!teacher) return <p className="text-center text-red-500 mt-8">Teacher not found!</p>;

  return (
    <div className="flex justify-center py-8 bg-gray-100">
      <div className="p-6 w-11/12 max-w-4xl bg-white shadow-lg rounded-lg">
        <div className="flex flex-col items-center">
          <img
            src={teacher.image}
            alt={teacher.name}
            className="w-32 h-32 rounded-full shadow-md"
          />
          <h1 className="text-3xl font-bold mt-4">{teacher.name}</h1>
          <p className="text-lg text-gray-600">{teacher.subject}</p>
        </div>
        <div className="mt-6">
          <p className="text-gray-700 text-center italic">{teacher.description}</p>
          <div className="mt-6 border-t border-gray-300 pt-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-700">Education:</span>
              <span className="text-gray-600">{teacher.education}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-700">Email:</span>
              <span className="text-gray-600">{teacher.email}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-700">Mobile:</span>
              <span className="text-gray-600">{teacher.mobile}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-700">Experience:</span>
              <span className="text-gray-600">{teacher.experience}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
