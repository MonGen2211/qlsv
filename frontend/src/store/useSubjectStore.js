import { create } from "zustand";

export const useSubjectStore = create((get, set) => ({
  isGettingSubject: false,
}));
