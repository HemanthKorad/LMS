import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Courses from "./pages/Courses.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import Students from "./pages/Students.jsx";
import Instructors from "./pages/Instructors.jsx";
import Settings from "./pages/Settings.jsx";

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="courses" element={<Courses />} />
      <Route path="courses/:id" element={<CourseDetail />} />
      <Route path="students" element={<Students />} />
      <Route path="instructors" element={<Instructors />} />
      <Route path="settings" element={<Settings />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
);

export default App;
