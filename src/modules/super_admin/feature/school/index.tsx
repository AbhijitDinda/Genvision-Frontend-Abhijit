import { Routes, Route } from "react-router-dom";
import SchoolList from "./SchoolList";
import AddSchoolForm from "./AddSchoolForm";
import SchoolDetail from "./SchoolDetail";
import TeacherProfile from "./TeacherProfile";
import StudentProfile from "./StudentProfile";
import ParentProfile from "./parentprofile";

const SchoolRoute: React.FC = () => {
  return (
    <Routes>

      <Route path="/" element={<SchoolList />} />
      

      <Route path="/add" element={<AddSchoolForm />} />


      <Route path="/:schoolId" element={<SchoolDetail />} />


      <Route path="/:id/student/:studentId" element={<StudentProfile />} />


      <Route path="/:id/teacher/:teacherId" element={<TeacherProfile />} />

      <Route path="/:id/student/:studentId/parent-profile/:parentId" element={<ParentProfile />} />
    </Routes>
  );
};

export default SchoolRoute;
