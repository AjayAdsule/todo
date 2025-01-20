import apiRequest from "@/lib/axios/axiosConfig";
import { useTaskModel } from "@/zustand/useTaskModel";
import { useMutation } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useEffect } from "react";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useForm } from "react-hook-form";

type Priority = "High" | "Medium" | "Low";

interface FormProps {
  id?: string;
  title: string;
  description: string;
  dueDate: Date | string;
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
      priority: "Medium",
    },
  });

  dayjs.extend(customParseFormat);

  useEffect(() => {
    if (type === "Edit") {
      if (task?.dueDate && task) {
        const date = dayjs(task?.dueDate, "DD-MM-YYYY");

        methods.reset({
          ...task,
          dueDate: date.format(),
        });
      }
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
