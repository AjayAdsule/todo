import { Todo } from "@/types/task.type";
import { create } from "zustand";

type Action = {
  isOpen: boolean;
  setOpen: () => void;
  setClose: () => void;
  toggleOpen: () => void;
  setTask: (task: Todo) => void;
};

type State = {
  isOpen: boolean;
  task?: Todo;
};

const useTaskLayout = create<State & Action>((set) => ({
  isOpen: false,
  task: undefined,
  setOpen: () => set({ isOpen: true }),
  setClose: () => set({ isOpen: false }),
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  setTask: (task) => set({ task: task }),
}));

export default useTaskLayout;
