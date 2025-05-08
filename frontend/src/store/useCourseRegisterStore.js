import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-toastify";

export const useCourseRegisterStore = create((set) => ({
  gettingCourseRegister: false,
  isUpdatingStatusCourseRegister: false,
  isDeletingCourseRegister: false,
  isUpdatingCourseRegisterScore: false,
  courseRegisters: [],
  pagination: {},

  getCourseRegister: async (page) => {
    set({ gettingCourseRegister: true });
    try {
      const res = await axiosInstance.get(`/courseRegister?page=${page}`);
      set({ courseRegisters: res.data.courseRegisters });
      set({ pagination: res.data.pagination });
    } catch (error) {
      console.log("Error in getCourseRegister", error);
      toast.error(error.res.data.message);
    } finally {
      set({ gettingCourseRegister: false });
    }
  },

  updatingStatusCourseRegister: async (id, page) => {
    set({ isUpdatingStatusCourseRegister: true });
    try {
      const res = await axiosInstance.put(`/courseRegister/${id}`);
      toast.success(res.data.message);

      useCourseRegisterStore.getState().getCourseRegister(page);
    } catch (error) {
      toast.error(error.res.data.message);
      console.log("Error in updatingStatusCourseRegister", error);
    } finally {
      set({ isUpdatingStatusCourseRegister: false });
    }
  },

  deleteCourseRegister: async (id, page) => {
    set({ isDeletingCourseRegister: true });
    try {
      const res = await axiosInstance.delete(`/courseRegister/${id}`);
      toast.success(res.data.message);
      useCourseRegisterStore.getState().getCourseRegister(page);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error in deleteCourseRegister: ", error);
    } finally {
      set({ isDeletingCourseRegister: false });
    }
  },

  updateCourseRegisterScore: async (id, data, page) => {
    set({ isUpdatingCourseRegisterScore: true });
    try {
      const res = await axiosInstance.put(
        `/courseRegister/updateScore/${id}`,
        data
      );
      toast.success(res.data.message);
      useCourseRegisterStore.getState().getCourseRegister(page);
    } catch (error) {
      console.log("Error in updateCourseRegisterScore: ", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isUpdatingCourseRegisterScore: false });
    }
  },
}));
