import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-toastify";

export const useCourseStore = create((set) => ({
  courses: [],
  pagination: [],
  isGettingCourses: false,
  isCreatingCourses: false,
  isCreatingCoursesRegister: false,

  getCourses: async () => {
    set({ isGettingCourses: true });
    try {
      const res = await axiosInstance.get("/course");
      set({ courses: res.data.courses });
      set({ pagination: res.data.pagination });
    } catch (error) {
      console.log("Error in getCourses: ", error.message);
      toast.error(error.response.data.message);
    } finally {
      set({ isGettingCourses: false });
    }
  },

  createCourseRegister: async (data) => {
    set({ isCreatingCoursesRegister: true });
    try {
      const res = await axiosInstance.post("/courseRegister", data);
      toast.success(res.data.message);
    } catch (error) {
      console.log("Error in createCourseRegister", error.message);
      toast.error(error.response.data.message);
    } finally {
      set({ isCreatingCourses: false });
    }
  },

  createCourse: async (data) => {
    set({ isCreatingCourses: true });
    try {
      const res = await axiosInstance.post("/courseRegister", data);
      toast.success(res.data.message);
      useCourseStore.getState().getCourses();
    } catch (error) {
      console.log("Error in createCourse controller: ", error.message);
      toast.error(error.response.data.message);
    } finally {
      set({ isCreatingCourses: false });
    }
  },
}));
