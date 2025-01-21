import { Todo } from "@/types/task.type";
import { create } from "zustand";

export type Category = "work" | "workout" | "learning" | "reading";
type TaskModelState = {
  isModelOpen: boolean;
  task?: Todo;
  type: "Edit" | "New";
  category?: Category;
};

type TaskModelActions = {
  setTaskModelOpen: (category?: Category) => void;
  onEditOpenTaskModel: (task: Todo) => void;
  onModelClose: () => void;
};

export const useTaskModel = create<TaskModelState & TaskModelActions>(
  (set) => ({
    isModelOpen: false,
    task: undefined,
    type: "New",
    category: undefined,
    setTaskModelOpen: (category) =>
      set({ isModelOpen: true, type: "New", category }),
    onEditOpenTaskModel: (task) =>
      set({ task, type: "Edit", isModelOpen: true }),
    onModelClose: () =>
      set({
        task: undefined,
        isModelOpen: false,
        type: "New",
        category: undefined,
      }),
  })
);
