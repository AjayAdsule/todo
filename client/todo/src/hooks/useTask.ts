import apiRequest from "@/lib/axios/axiosConfig";
import { Category, useTaskModel } from "@/zustand/useTaskModel";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import usePages from "./usePages";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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

const schema = z
  .object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    dueDate: z.union([
      z.date(),
      z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date format",
      }),
    ]),
    priority: z.string().min(1, "Priority is required"),
    status: z.enum(["In-progress", "Pending", "Completed"], {
      errorMap: () => ({ message: "Status is required" }),
    }),
    category: z.optional(z.enum(["work", "workout", "learning", "reading"])),
  })
  .passthrough();

export default function useTask() {
  const { isModelOpen, onModelClose, task, type, category } = useTaskModel();
  const { isMainPage, mainPagesRoute, listPageRoute, isListPage } = usePages();

  const api = useQueryClient();

  const invalidateQueryKey = isMainPage
    ? mainPagesRoute
    : isListPage
    ? listPageRoute
    : "overview";

  const methods = useForm<FormProps>({
    resolver: zodResolver(schema),
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
      methods.reset({
        ...task,
      });
    }
  }, [task]);

  useEffect(() => {
    if (category && type === "New") {
      methods.reset({
        _id: "",
        title: "",
        description: "",
        dueDate: undefined,
        priority: "Medium",
        status: "In-progress",
      });
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
      methods.reset({
        _id: "",
        title: "",
        description: "",
        dueDate: undefined,
        priority: "Medium",
        status: "In-progress",
      });
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
