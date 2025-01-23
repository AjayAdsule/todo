import apiRequest from "@/lib/axios/axiosConfig";
import { Category, useTaskModel } from "@/zustand/useTaskModel";
import { useMutation } from "@tanstack/react-query";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type Priority = "High" | "Medium" | "Low";

interface FormProps {
  id?: string;
  title: string;
  description: string;
  dueDate: Date | string;
  priority?: Priority;
  status: "In-progress" | "Pending" | "Completed";
  category?: Category;
}

export default function useTask() {
  const { isModelOpen, onModelClose, task, type, category } = useTaskModel();
  const methods = useForm<FormProps>({
    defaultValues: {
      id: "",
      title: "",
      description: "",
      dueDate: "",
      priority: "Medium",
      status: "In-progress",
      category: category,
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
  }, [task]);

  useEffect(() => {
    if (category && type === "New") {
      methods.reset({ category });
    }
  }, [category]);

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
