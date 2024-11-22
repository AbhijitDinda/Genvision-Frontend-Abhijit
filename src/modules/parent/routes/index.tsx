import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import Sidebar from "../layout/layout.tsx";

// import StudentAssignmentsDashboard from "../features/class/screens/assignments";

const ParentNavigator: React.FC = () => {
  return (
    <>
      <Sidebar>
        <Routes>
          {/* <Route path="dashboard/" element={<Dashboard />} />
          <Route path="attendances/" element={<StudentAttendanceDashboard />} />
          <Route path="marks/" element={<StudentMarksDetailedDashboard />} />
          <Route path="assignments/" element={<AssignmentList />} /> */}
        </Routes>
      </Sidebar>
    </>
  );
};

export default ParentNavigator;
