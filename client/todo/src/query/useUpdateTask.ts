import globalPatchRequest from "@/lib/axios/services/globalPatchRequest";
import URLS from "@/lib/axios/URLS";
import { Todo } from "@/types/task.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface UpdateTaskPayload {
  title?: string;
  id: string;
  status?: "Completed" | "Pending" | "In-progress";
  description?: string;
  dueDate?: string;
}

export default function useUpdateTask() {
  const api = useQueryClient();
  const { mutate: updateTaskMutate } = useMutation<
    Todo,
    unknown,
    UpdateTaskPayload
  >({
    mutationFn: (data: UpdateTaskPayload) =>
      globalPatchRequest<UpdateTaskPayload, Todo>({
        url: URLS.updateTask,
        data,
      }),
    onSuccess: () => api.invalidateQueries({ queryKey: ["todos"] }),
  });

  return {
    updateTaskMutate,
  };
}
