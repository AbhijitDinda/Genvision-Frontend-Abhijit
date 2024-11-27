import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import Sidebar from "../layout/layout";
// import School from "../feature/school";
import SchoolList from "../feature/school/SchoolList";
import SchoolAdd from "../feature/school/AddSchoolForm";
import SchoolDetails from "../feature/school/SchoolDetail";
import TeacherProfile from "../feature/school/TeacherProfile.tsx";
import StudentProfile from "../feature/school/StudentProfile.tsx";
import Dashboard from "../feature/dashboard/index.tsx";

const SchoolNavigator: React.FC = () => {
  return (
    <>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          {/* <Route path="school/*" element={<School />} /> */}
          <Route path="school/" element={<SchoolList />} />
          <Route path="school/add" element={<SchoolAdd />} />
          <Route path="school/:id" element={<SchoolDetails />} />

          <Route path="school/:id/teacher/:id" element={<TeacherProfile />} />
          <Route path="school/:id/student/:id" element={<StudentProfile />} />
        </Routes>
      </Sidebar>
    </>
  );
};

export default SchoolNavigator;
