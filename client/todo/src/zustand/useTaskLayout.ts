import { create } from "zustand";

type TaskLayoutState = {
  isOpen: boolean;
  setOpen: () => void;
  setClose: () => void;
  toggleOpen: () => void;
};

const useTaskLayout = create<TaskLayoutState>((set) => ({
  isOpen: false,
  setOpen: () => set({ isOpen: true }),
  setClose: () => set({ isOpen: false }),
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useTaskLayout;
