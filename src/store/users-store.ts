import { UsersI } from "@/interfaces/users";
import { create } from "zustand";
export const useUsersGlobalStore = create((set) => ({
  loggedInUserData: null,
  setLoggedInUserData: (data: any) => set({ loggedInUserData: data }),
}));
export interface IUsersGlobalStore {
  loggedInUserData: UsersI | null;
  setLoggedInUserData: (data: UsersI) => void;
}
