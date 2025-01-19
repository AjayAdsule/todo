import apiRequest from "@/lib/axios/axiosConfig";
import { useMutation } from "@tanstack/react-query";
import dayjs from "dayjs";

import { useForm } from "react-hook-form";

type Priority = "high" | "medium" | "low";

interface FormProps {
  title: string;
  description: string;
  dueDate: string;
  priority?: Priority;
}

export default function useTask(type = "new", taskId?: string) {
  const methods = useForm<FormProps>({
    defaultValues: {
      title: "",
      description: "",
      dueDate: new Date(),
      priority: "medium",
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (data: FormProps) => {
      if (type === "new") {
        const res = await apiRequest.post("/todo/create-task", data);
        return res.data;
      } else if (type === "edit" && taskId) {
        const response = await apiRequest.patch(`/todo/edit-task`, data);
        return response.data;
      } else {
        throw new Error("Invalid type or missing task ID for edit");
      }
    },
  });

  const onTaskSubmit = (data: FormProps) => {
    const date = dayjs(data.dueDate).format("DD-MM-YYYY");

    mutate({
      ...data,
      dueDate: date,
    });
  };

  return {
    methods,
    onTaskSubmit,
  };
}
