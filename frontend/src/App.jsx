import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentPage from "./pages/Student/StudentPage";
import SubjectPage from "./pages/Subject/SubjectPage";
import CoursePage from "./pages/Course/CoursePage";
import LoginPage from "./pages/Signin/LoginPage";
import SginupPage from "./pages/Signin/SginupPage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";

function App() {
  const { authUser, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log(authUser);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SginupPage />} />
        <Route path="/login" element={<LoginPage />} />

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
