import { Link, Navigate, Route, Routes } from "react-router-dom";
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
import CourseRegisterPage from "./pages/CourseRegister/CourseRegisterPage";

function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
      </div>
    );

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        />

        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        />

        {/* StudentPage */}
        <Route
          path="/student"
          element={authUser ? <StudentPage /> : <Navigate to="/login" />}
        />

        {/* SubjectPage */}
        <Route
          path="/subject"
          element={authUser ? <SubjectPage /> : <Navigate to="/login" />}
        />

        {/* CoursePage */}
        <Route
          path="/course"
          element={
            authUser ? (
              <CoursePage authUser={authUser} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/courseRegister"
          element={
            authUser ? (
              <CourseRegisterPage authUser={authUser} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
