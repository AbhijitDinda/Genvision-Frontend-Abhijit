import { Routes, Route } from "react-router-dom";
import Sidebar from "../layout/layout";
import SchoolRoute from "../feature/school"; // Import the SchoolRoute component

import Dashboard from "../feature/dashboard/index.tsx";

const SchoolNavigator: React.FC = () => {
  return (
    <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="school/*" element={<SchoolRoute />} />

      </Routes>
    </Sidebar>
  );
};

export default SchoolNavigator;
