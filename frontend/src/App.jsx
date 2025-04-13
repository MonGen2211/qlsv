import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentPage from "./pages/Student/StudentPage";
import SubjectPage from "./pages/Subject/SubjectPage";
import CoursePage from "./pages/Course/CoursePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* StudentPage */}
        <Route path="/student" element={<StudentPage />} />

        {/* SubjectPage */}
        <Route path="/subject" element={<SubjectPage />} />

        {/* CoursePage */}
        <Route path="/course" element={<CoursePage />} />
      </Routes>
    </>
  );
}

export default App;
