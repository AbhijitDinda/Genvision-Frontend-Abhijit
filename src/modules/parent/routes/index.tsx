import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import Sidebar from "../layout/layout.tsx";
import StudentMarksDetailedDashboard from "../features/class/screens/marks";
import StudentAttendanceDashboard from "../features/class/screens/attendance";
import StudentteachersDashboard from "../features/class/screens/teacher.tsx";
import TeacherProfile from "../features/class/components/teacherprofile.tsx";
import Assignments from "../features/class/screens/assignments.tsx";
import AssignmentPaper from "../features/class/components/assignmentpaper.tsx";
import DashboardAnalysis from "../features/class/screens/dashboard.tsx";


const ParentNavigator: React.FC = () => {
  return (
    <>
      <Sidebar>
        <Routes>
        <Route path="/" element={<DashboardAnalysis />} />


          <Route path="assignments/" element={<Assignments />} />
          <Route path="assignments/:id" element={<AssignmentPaper />} />

          <Route path="teachers/" element={<StudentteachersDashboard />} />
          <Route path="teachers/profile/:id" element={<TeacherProfile />} />

          <Route path="attendances/" element={<StudentAttendanceDashboard />} />

          <Route path="marks/" element={<StudentMarksDetailedDashboard />} />
        </Routes>
      </Sidebar>
    </>
  );
};

export default ParentNavigator;
