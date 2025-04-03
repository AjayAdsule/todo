import { UserLoginResponse } from "@/types/user/userResponse";
import { create } from "zustand";

type UserState = {
  user?: UserLoginResponse;
};

type UserActions = {
  setUser: (user: UserLoginResponse) => void;
};

export const useUsers = create<UserState & UserActions>((set) => ({
  user: undefined,
  setUser: (user) => set({ user }),
}));
