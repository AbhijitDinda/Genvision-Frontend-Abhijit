import { Routes, Route } from "react-router-dom";
import SchoolList from "./SchoolList";
import SchoolDetail from "./SchoolDetail";
import AddSchoolForm from "./AddSchoolForm";

const School: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SchoolList />} />
      <Route path="/add" element={<AddSchoolForm />} />
      <Route path="/:id" element={<SchoolDetail />} />
    </Routes>
  );
};

export default School;
