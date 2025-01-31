import apiRequest from "@/lib/axios/axiosConfig";
import { Category, useTaskModel } from "@/zustand/useTaskModel";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import usePages from "./usePages";

type Priority = "High" | "Medium" | "Low";

interface FormProps {
  _id?: string;
  title: string;
  description: string;
  dueDate?: Date;
  priority?: Priority;
  status: "In-progress" | "Pending" | "Completed";
  category?: Category;
}

export default function useTask() {
  const { isModelOpen, onModelClose, task, type, category } = useTaskModel();
  const { isMainPage, mainPagesRoute, listPageRoute } = usePages();

  const api = useQueryClient();

  const invalidateQueryKey = isMainPage ? mainPagesRoute : listPageRoute;

  const methods = useForm<FormProps>({
    defaultValues: {
      _id: "",
      title: "",
      description: "",
      dueDate: undefined,
      priority: "Medium",
      status: "In-progress",
      category: category,
    },
  });

  dayjs.extend(customParseFormat);

  useEffect(() => {
    if (type === "Edit") {
      console.log(task);
      methods.reset({
        ...task,
      });
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
        const response = await apiRequest.patch(`/todo/edit-task`, {
          ...data,
          id: data?._id,
        });
        return response.data;
      } else {
        throw new Error("Invalid type or missing task ID for edit");
      }
    },
    onSuccess: () => {
      api.invalidateQueries({ queryKey: ["todo", invalidateQueryKey] });
      methods.reset();
      onModelClose();
    },
  });

  const onTaskSubmit = (data: FormProps) => {
    mutate({
      ...data,
    });
  };

  return {
    methods,
    onTaskSubmit,
    isModelOpen,
    onModelClose,
  };
}
