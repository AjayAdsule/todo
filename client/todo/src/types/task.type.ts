export interface Todo {
  _id: string;
  title: string;
  description: string;
  status: "Completed" | "Pending" | "In-progress";
  dueDate: string | Date;
  userId: string;
  createdAt: string;
  priority: "High" | "Medium" | "Low";
  __v: number;
}

export interface TodosByStatus {
  Completed: Todo[];
  Pending: Todo[];
  Progress: Todo[];
}

export interface TaskResponse {
  success: boolean;
  message: string;
  todo: TodosByStatus;
  taskLength: number;
}

export type ActiveTab = "Progress" | "Pending" | "Completed";
