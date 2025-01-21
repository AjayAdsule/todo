import { Todo } from "@/types/task.type";
import { create } from "zustand";

type TaskModelState = {
  isModelOpen: boolean;
  task?: Todo;
  type: "Edit" | "New";
};

type TaskModelActions = {
  setTaskModelOpen: () => void;
  onEditOpenTaskModel: (task: Todo) => void;
  onModelClose: () => void;
};

export const useTaskModel = create<TaskModelState & TaskModelActions>(
  (set) => ({
    isModelOpen: false,
    task: undefined,
    type: "New",
    setTaskModelOpen: () => set({ isModelOpen: true, type: "New" }),
    onEditOpenTaskModel: (task) =>
      set({ task, type: "Edit", isModelOpen: true }),
    onModelClose: () =>
      set({ task: undefined, isModelOpen: false, type: "New" }),
  })
);
