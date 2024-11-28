import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaUserTie, FaUsers } from "react-icons/fa";
import { useListSchool } from "../../store/hooks";

// Define the type for a school
interface School {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string | null;
  createdAt: string;
  tenantId: number;
  userRole: string;
}

// Define the return type of useListSchool hook
interface UseListSchoolResponse {
  data: {
    message: string;
    data: School[]; // List of schools
  };
  isLoading: boolean;
  isError: boolean;
}

const SchoolList: React.FC = () => {
  // Type the hook's response
  const { data: apiResponse, isLoading, isError } = useListSchool() as UseListSchoolResponse;

  // Extract the schools data
  const schoolList = apiResponse?.data ?? [];

  console.log("School List Data:", schoolList);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  if (!Array.isArray(schoolList)) {
    return <div>Error: Invalid data format</div>;
  }

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
        {schoolList.map((school) => (
          <div
            key={school.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <img
              src="https://img.freepik.com/free-vector/vector-cartoon-illustration-school-building-green-lawn-road-trees-educalion-l_134830-1588.jpg"
              alt={school.fullName}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {school.fullName}
              </h2>
              <div className="text-gray-600 space-y-2">
                <div className="flex items-center gap-2">
                  <FaUserTie className="text-gray-800" />
                  <span>{school.userRole}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-gray-800" />
                  <span>Tenant ID: {school.tenantId}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-gray-800" />
                  <span>Email: {school.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-gray-800" />
                  <span>Phone: {school.phoneNumber || "N/A"}</span>
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
