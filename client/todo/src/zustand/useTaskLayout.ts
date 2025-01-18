import { Todo } from "@/types/task.type";
import { create } from "zustand";

type Action = {
  isOpen: boolean;
  setOpen: () => void;
  setClose: () => void;
  toggleOpen: () => void;
  setTask: (task: Todo) => void;
  setActive: (id: string) => void;
  setActiveReset: () => void;
};

type State = {
  isOpen: boolean;
  task?: Todo;
  active?: string;
};

const useTaskLayout = create<State & Action>((set) => ({
  isOpen: false,
  task: undefined,
  active: undefined,
  setOpen: () => set({ isOpen: true }),
  setClose: () => set({ isOpen: false }),
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  setTask: (task) => set({ task: task }),
  setActive: (id) => set({ active: id }),
  setActiveReset: () => set({ active: undefined }),
}));

export default useTaskLayout;
