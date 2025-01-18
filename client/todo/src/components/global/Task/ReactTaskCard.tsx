import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Todo } from "@/types/task.type";
import useTaskLayout from "@/zustand/useTaskLayout";
import { CalendarDays } from "lucide-react";
import StatusBadge from "./StatusBadge";

interface TaskProps {
  tasks: Todo;
}

const ReactTaskCard: React.FC<TaskProps> = ({ tasks }) => {
  const { setTask, setOpen } = useTaskLayout();

  const onCardClick = () => {
    setTask(tasks);
    setOpen();
  };

  return (
    <div
      className="border p-2 flex gap-x-3 items-center cursor-pointer rounded-md"
      onClick={onCardClick}
    >
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
            <Badge variant={"outline"}>
              <span className="text-blue-500">Work</span>
            </Badge>
            <StatusBadge variant={tasks?.status}>{tasks.status}</StatusBadge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactTaskCard;
