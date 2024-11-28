import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Tabs from "./Tabs";
import { SchoolStudentListApi, SchoolTeacherListApi } from "../../store/api";

const SchoolDetail: React.FC = () => {
  const { schoolId } = useParams();

  // Fetch Students Data
  const {
    data: students,
    isLoading: isStudentsLoading,
    error: studentsError,
  } = useQuery({
    queryKey: ["schoolStudents", schoolId],
    queryFn: () => SchoolStudentListApi(Number(schoolId)),
    enabled: !!schoolId, // Fetch only when schoolId is available
  });
// console.log("students",students)

  // Fetch Teachers Data
  // const {
  //   data: teachers,
  //   isLoading: isTeachersLoading,
  //   error: teachersError,
  // } = useQuery({
  //   queryKey: ["schoolTeachers", schoolId],
  //   queryFn: () => SchoolTeacherListApi(Number(schoolId)),
  //   enabled: !!schoolId, // Fetch only when schoolId is available
  // });
  // console.log("teachers",teachers)

  const school = {
    id: "1",
    name: "Green Valley School",
    location: "New York",
    image: "https://www.ashokaschools.org/images/video-cover.jpg",
    chairman: "John Doe",
    students: 500,
    description:
      "A prestigious school with a strong focus on academics and extracurricular activities.",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 lg:px-16">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* School Image */}
        <div className="relative">
          <img
            src={school.image}
            alt={school.name}
            className="w-full h-80 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-transparent p-4">
            <h1 className="text-3xl text-white font-bold">{school.name}</h1>
          </div>
        </div>

        {/* School Details */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              About {school.name}
            </h2>
            <p className="text-gray-600">{school.description}</p>
          </div>

          {/* Key Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">Location</h3>
              <p className="text-gray-600">{school.location}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">Chairman</h3>
              <p className="text-gray-600">{school.chairman}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">
                Number of Students
              </h3>
              <p className="text-gray-600">{school.students}</p>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        {/* <div className="border-t p-6">
          {isStudentsLoading || isTeachersLoading ? (
            <p>Loading data...</p>
          ) : studentsError || teachersError ? (
            <p>Error fetching data. Please try again later.</p>
          ) : (
            <Tabs students={students} teachers={teachers} />
          )}
        </div> */}

        <div className="border-t p-6">
          {isStudentsLoading ? (
            <p>Loading data...</p>
          ) : studentsError ? (
            <p>Error fetching data. Please try again later.</p>
          ) : (
            <Tabs students={students} teachers={""}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchoolDetail;
