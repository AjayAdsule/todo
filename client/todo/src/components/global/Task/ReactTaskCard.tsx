import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { PRIORITY_CONST, STATUS_CONST } from "@/constant/badge.constant";
import useUpdateTask from "@/query/useUpdateTask";
import { Todo } from "@/types/task.type";
import useTaskLayout from "@/zustand/useTaskLayout";
import { useTaskModel } from "@/zustand/useTaskModel";
import { CalendarDays, Pen, Trash } from "lucide-react";
import { useState } from "react";
import StatusBadge from "./StatusBadge";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import globalPostRequest from "@/lib/axios/services/globalPostRequest";
import URLS from "@/lib/axios/URLS";

interface TaskProps {
  tasks: Todo;
}

const ReactTaskCard: React.FC<TaskProps> = ({ tasks }) => {
  const { setTask, setOpen, setActive, active } = useTaskLayout();
  const { onEditOpenTaskModel } = useTaskModel();
  const api = useQueryClient();
  const { mutate: deleteTaskMutation } = useMutation({
    mutationFn: ({ id }: { id: string }) =>
      globalPostRequest({ url: URLS.deleteTask, data: { id } }),
    onSuccess: () => api.invalidateQueries({ queryKey: ["todos"] }),
  });

  const [isCompleted, setIsCompleted] = useState(
    tasks.status === "Completed" ? true : false
  );

  const { updateTaskMutate } = useUpdateTask();

  const handleOnChecked = (data: boolean) => {
    updateTaskMutate({
      id: tasks._id,
      status: data ? "Completed" : "In-progress",
    });
    setIsCompleted(data);
  };

  const onCardClick = () => {
    setTask(tasks);
    setOpen();
    setActive(tasks._id);
  };
  const isActive = active === tasks._id;
  return (
    <div
      className={`border  p-2 flex gap-x-3  cursor-pointer rounded-md ${
        isActive && "border-primary"
      }`}
    >
      <div className="flex items-center">
        <Checkbox
          id="completed"
          className="rounded-full"
          checked={isCompleted}
          onCheckedChange={handleOnChecked}
        />
      </div>
      <div className="flex flex-col w-full" onClick={onCardClick}>
        <h3 className="font-semibold">{tasks.title}</h3>
        <div className="card_details mt-2">
          <span className="flex text-xs items-center gap-x-1">
            <CalendarDays size={12} />
            {tasks.dueDate}
          </span>
          <div className="flex gap-x-2 mt-2">
            <Badge variant={"outline"}>
              <span className="text-blue-500">Work</span>
            </Badge>
            <StatusBadge variant={STATUS_CONST[tasks?.status]}>
              {tasks.status}
            </StatusBadge>
            <StatusBadge variant={PRIORITY_CONST[tasks?.priority]}>
              {tasks.priority}
            </StatusBadge>
          </div>
        </div>
      </div>
      <div className="flex gap-x-2 items-start text-primary">
        <Pen size={16} onClick={() => onEditOpenTaskModel(tasks)} />
        <Trash
          size={16}
          className="text-destructive"
          onClick={() => deleteTaskMutation({ id: tasks._id })}
        />
      </div>
    </div>
  );
};

export default ReactTaskCard;
