import { useState } from "react";
import { FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type student = {
  fullName: string;
  id: number;
};

type props = {
  students: student[];
};

const Tabs: React.FC = ({ students }: props) => {
  const [activeTab, setActiveTab] = useState("students");
  const navigate = useNavigate();

  // const teachers = [
  //   { id:1,
  //     name: "Mr. Alan Brown",
  //     subject: "Mathematics",
  //     image: "https://randomuser.me/api/portraits/men/32.jpg",
  //   },
  //   {
  //     id:1,
  //     name: "Ms. Linda Green",
  //     subject: "English",
  //     image: "https://randomuser.me/api/portraits/women/44.jpg",
  //   },
  //   {
  //     id:1,
  //     name: "Mr. Jack Turner",
  //     subject: "Science",
  //     image: "https://randomuser.me/api/portraits/men/47.jpg",
  //   },
  //   {
  //     id:1,
  //     name: "Ms. Emily Rose",
  //     subject: "History",
  //     image: "https://randomuser.me/api/portraits/women/30.jpg",
  //   },
  //   {
  //     id:1,
  //     name: "Mr. George White",
  //     subject: "Art",
  //     image: "https://randomuser.me/api/portraits/men/51.jpg",
  //   },
  //   {
  //     id:1,
  //     name: "Ms. Sophia Blue",
  //     subject: "Geography",
  //     image: "https://randomuser.me/api/portraits/women/39.jpg",
  //   },
  //   {
  //     id:1,
  //     name: "Mr. Chris Red",
  //     subject: "Physical Education",
  //     image: "https://randomuser.me/api/portraits/men/60.jpg",
  //   },
  //   {
  //     id:1,
  //     name: "Ms. Hannah Grey",
  //     subject: "Computer Science",
  //     image: "https://randomuser.me/api/portraits/women/25.jpg",
  //   },
  // ];

  // const students = [
  //   { id:1,
  //     name: "John Doe",
  //     grade: "A",
  //     image: "https://randomuser.me/api/portraits/men/15.jpg",
  //   },
  //   {
  //     id:1,
  //     name: "Jane Smith",
  //     grade: "B",
  //     image: "https://randomuser.me/api/portraits/women/23.jpg",
  //   },
  //   {
  //     id:1,
  //     name: "Michael Brown",
  //     grade: "A",
  //     image: "https://randomuser.me/api/portraits/men/18.jpg",
  //   },
  //   {
  //     id:1,
  //     name: "Emily Johnson",
  //     grade: "A+",
  //     image: "https://randomuser.me/api/portraits/women/31.jpg",
  //   },
  //   {
  //     id:1,
  //     name: "James Wilson",
  //     grade: "B",
  //     image: "https://randomuser.me/api/portraits/men/42.jpg",
  //   },
  //   {
  //     id:1,
  //     name: "Emma Williams",
  //     grade: "A",
  //     image: "https://randomuser.me/api/portraits/women/34.jpg",
  //   },
  //   {
  //     id:1,
  //     name: "Oliver Jones",
  //     grade: "A-",
  //     image: "https://randomuser.me/api/portraits/men/27.jpg",
  //   },
  //   {
  //     id:1,
  //     name: "Sophia Martinez",
  //     grade: "A",
  //     image: "https://randomuser.me/api/portraits/women/36.jpg",
  //   },
  // ];

  return (
    <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow">
      {/* Tab Navigation */}
      <div className="flex space-x-4 border-b pb-2">
        <button
          onClick={() => setActiveTab("teachers")}
          className={`flex items-center px-4 py-2 text-sm font-medium ${
            activeTab === "teachers"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-600 hover:text-blue-500"
          }`}
        >
          <FaChalkboardTeacher className="mr-2 text-xl" />
          Teachers
        </button>
        <button
          onClick={() => setActiveTab("students")}
          className={`flex items-center px-4 py-2 text-sm font-medium ${
            activeTab === "students"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-600 hover:text-blue-500"
          }`}
        >
          <FaUserGraduate className="mr-2 text-xl" />
          Students
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === "teachers" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="flex items-center bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-12 h-12 rounded-full border border-gray-300 mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {teacher.name}
                  </h3>
                  <p className="text-sm text-gray-500">{teacher.subject}</p>
                  <button
                    onClick={() => navigate(`teacher/${teacher.id}`)}
                    className="mt-2 text-blue-500 hover:underline"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))} */}
          </div>
        )}
        {activeTab === "students" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {students.map((student) => (
              <div
                key={student.id}
                className="flex items-center bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <img
                  src="https://randomuser.me/api/portraits/men/15.jpg"
                  alt={student.fullName}
                  className="w-12 h-12 rounded-full border border-gray-300 mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {student.fullName}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {/* Grade: {student.grade} */}
                  </p>
                  <button
                    onClick={() => navigate(`student/${student.id}`)}
                    className="mt-2 text-blue-500 hover:underline"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
