export interface Todo {
  _id: string;
  title: string;
  description: string;
  status: "Completed" | "Pending" | "In-progress";
  dueDate: string;
  userId: string;
  createdAt: string;
  __v: number;
}

export interface TodosByStatus {
  completed: Todo[];
  pending: Todo[];
  progress: Todo[];
}

export interface TaskResponse {
  success: boolean;
  message: string;
  todo: TodosByStatus;
}
