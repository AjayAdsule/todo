import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Todo } from "@/types/task.type";
import { CalendarDays } from "lucide-react";

interface TaskProps {
  tasks: Todo;
}

const ReactTaskCard: React.FC<TaskProps> = ({ tasks }) => {
  const taskStatus = {
    Pending: "destructive",
    Completed: "secondary",
    ["In-progress"]: "default",
  };

  return (
    <div className="border p-2 flex gap-x-3 items-center cursor-pointer rounded-md">
      <div>
        <Checkbox id="completed" className="rounded-full" />
      </div>
      <div className="flex flex-col">
        <h3 className="font-semibold">{tasks.title}</h3>
        <div className="card_details mt-2">
          <span className="flex text-xs items-center gap-x-1">
            <CalendarDays size={12} />
            {new Date(tasks.dueDate).toDateString()}
          </span>
          <div className="flex gap-x-2 mt-2">
            <Badge variant={"secondary"}>Work</Badge>
            <Badge variant={taskStatus[tasks?.status ?? "Pending"]}>
              {tasks.status}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactTaskCard;
