import apiRequest from "@/lib/axios/axiosConfig";
import { useTaskModel } from "@/zustand/useTaskModel";
import { useMutation } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useEffect } from "react";

import { useForm } from "react-hook-form";

type Priority = "high" | "medium" | "low";

interface FormProps {
  id?: string;
  title: string;
  description: string;
  dueDate: string;
  priority?: Priority;
}

export default function useTask() {
  const { isModelOpen, onModelClose, task, type } = useTaskModel();
  const methods = useForm<FormProps>({
    defaultValues: {
      id: "",
      title: "",
      description: "",
      dueDate: "",
      priority: "medium",
    },
  });

  useEffect(() => {
    if (type === "Edit") {
      methods.reset(task);
    }
  }, [type]);

  const { mutate } = useMutation({
    mutationFn: async (data: FormProps) => {
      if (type === "New") {
        const res = await apiRequest.post("/todo/create-task", data);
        return res.data;
      } else if (type === "Edit" && task?._id) {
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
    isModelOpen,
    onModelClose,
  };
}
