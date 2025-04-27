import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-toastify";
// import { axiosInstance } from "../lib/axios";

export const useAuthStore = create((set) => ({
  authUser: null,
  isCheckingAuth: null,
  isLoggingIn: false,

  // setup state
  checkAuth: async () => {
    set({ isCheckingAuth: true });
    try {
      const res = await axiosInstance.get("/user/checkAuth");
      set({ authUser: res.data });
    } catch (error) {
      console.log(`Error in checkAuth ${error}`);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  login: async (data) => {
    try {
      const res = await axiosInstance.post("/user/login", data);
      set({ authUser: res.data.user });
    } catch (error) {
      console.log(`Error in checkAuth ${error}`);
      toast.error(error.response.data.message);
      set({ authUser: null });
    } finally {
      set({ isLoggingIn: false });
    }
  },
}));
