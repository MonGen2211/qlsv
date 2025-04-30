import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-toastify";
// import { axiosInstance } from "../lib/axios";

export const useAuthStore = create((set) => ({
  authUser: null,

  students: [],
  pagination: {},
  isCheckingAuth: true,
  isLoggingIn: false,
  isLoggingOut: false,
  isGetStudent: false,
  isEditStudent: false,
  // setup state
  checkAuth: async () => {
    set({ isCheckingAuth: true });
    try {
      const res = await axiosInstance.get("/user/checkAuth");
      set({ authUser: res.data.user });
    } catch (error) {
      toast.error(`Error in checkAuth ${error}`);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/user/login", data);
      set({ authUser: res.data });
    } catch (error) {
      // console.log(`Error in checkAuth ${error}`);
      toast.error(error.response.data.message);
      set({ authUser: null });
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    set({ isLoggingOut: true });
    try {
      await axiosInstance.post("/user/logout");
      set({ authUser: null });
    } catch (error) {
      toast.error(error.response.data);
      set({ authUser: null });
    } finally {
      set({ isLoggingOut: false });
    }
  },

  getStudents: async (page) => {
    set({ isGetStudent: true });
    try {
      const res = await axiosInstance.get(`/user/Student?page=${page}`);
      set({ students: res.data.user });
      set({ pagination: res.data.pagination });
    } catch (error) {
      toast.error(error.response.data);
      set({ authUser: null });
    } finally {
      set({ isGetStudent: false });
    }
  },

  editStudent: async (data, id) => {
    set({ isEditStudent: true });
    try {
      await axiosInstance.put(`/user/${id}`, data);
      toast.success("Update Stuđent Successfully");
    } catch (error) {
      toast.error(error.response.data);
      set({ authUser: null });
    } finally {
      set({ isEditStudent: false });
    }
  },
}));
