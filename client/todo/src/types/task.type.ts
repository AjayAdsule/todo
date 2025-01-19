export interface Todo {
  _id: string;
  title: string;
  description: string;
  status: "Completed" | "Pending" | "In-progress";
  dueDate: string;
  userId: string;
  createdAt: string;
  priority: string;
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
}
