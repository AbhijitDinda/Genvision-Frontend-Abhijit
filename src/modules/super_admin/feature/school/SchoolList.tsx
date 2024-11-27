import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaUserTie, FaUsers } from "react-icons/fa";

const schools = [
  {
    id: "1",
    name: "Green Valley School",
    location: "New York",
    image: "https://media.istockphoto.com/id/171306436/photo/red-brick-high-school-building-exterior.jpg?s=612x612&w=0&k=20&c=vksDyCVrfCpvb9uk4-wcBYu6jbTZ3nCOkGHPSgNy-L0=",
    chairman: "John Doe",
    students: 500,
  },
  {
    id: "2",
    name: "Blue Ridge Academy",
    location: "Los Angeles",
    image: "https://www.ashokaschools.org/images/video-cover.jpg",
    chairman: "Jane Smith",
    students: 350,
  },
  {
    id: "3",
    name: "Green Valley School",
    location: "New York",
    image: "https://media.istockphoto.com/id/171306436/photo/red-brick-high-school-building-exterior.jpg?s=612x612&w=0&k=20&c=vksDyCVrfCpvb9uk4-wcBYu6jbTZ3nCOkGHPSgNy-L0=",
    chairman: "John Doe",
    students: 500,
  },
  {
    id: "4",
    name: "Blue Ridge Academy",
    location: "Los Angeles",
    image: "https://www.ashokaschools.org/images/video-cover.jpg",
    chairman: "Jane Smith",
    students: 350,
  },
];

const SchoolList: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen py-10 px-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        Our Partner Schools
      </h1>
      <div className="flex justify-center mb-10">
        <Link
          to="add"
          className="bg-gradient-to-r from-gray-800 to-gray-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:from-gray-700 hover:to-gray-500 transition-all"
        >
          Add New School
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {schools.map((school) => (
          <div
            key={school.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <img
              src={school.image}
              alt={school.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {school.name}
              </h2>
              <div className="text-gray-600 space-y-2">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-gray-800" />
                  <span>{school.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUserTie className="text-gray-800" />
                  <span>{school.chairman}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-gray-800" />
                  <span>{school.students} Students</span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  to={`${school.id}`}
                  className="inline-block w-full text-center bg-gradient-to-r from-gray-800 to-gray-600 text-white py-2 rounded shadow hover:from-gray-700 hover:to-gray-500"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolList;
