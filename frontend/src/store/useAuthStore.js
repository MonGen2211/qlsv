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
  isDeleteStudent: false,

  // getTeacher
  isGetTeacher: false,
  teachers: [],

  // getSubjects
  isGetSubject: false,
  isCreateSubject: false,
  isEditSubject: false,
  isDeleteSubject: false,
  subjects: [],
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
      toast.success("Login Successfully");
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

  deleteStudent: async (id) => {
    set({ isDeleteStudent: true });
    try {
      const res = axiosInstance.delete(`/user/delete/${id}`);
      toast.success(res.data);
    } catch (error) {
      toast.error(error.response.data);
    } finally {
      set({ isDeleteStudent: false });
    }
  },
  // todo:update late
  getTeachers: async (page) => {
    try {
      const res = await axiosInstance.get(`/user/Teacher?page=${page}`);

      set({ teachers: res.data.user });
      set({ pagination: res.data.pagination });
    } catch (error) {
      toast.error(error.res.data);
    } finally {
      set({ isGetTeacher: false });
    }
  },

  getSubjects: async (page) => {
    set({ isGetSubject: true });
    try {
      const res = await axiosInstance.get(`/subject?page=${page}`);
      set({ subjects: res.data.subject });
      set({ pagination: res.data.pagination });
    } catch (error) {
      toast.error(error.res.data.message);
    } finally {
      set({ isGetSubject: false });
    }
  },

  createSubject: async (data) => {
    set({ isCreateSubject: true });
    try {
      const res = await axiosInstance.post("/subject", data);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.res.data.message);
    } finally {
      set({ isCreateSubject: false });
    }
  },

  editSubject: async (subject_id, data) => {
    set({ isEditSubject: true });
    try {
      const res = await axiosInstance.put(`/subject/${subject_id}`, data);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isEditSubject: false });
    }
  },

  deleteSubject: async (subject_id) => {
    set({ isDeleteSubject: true });
    try {
      await axiosInstance.delete(`/subject/${subject_id}`);
      toast.success("Delete Subject Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isDeleteSubject: false });
    }
  },
}));
