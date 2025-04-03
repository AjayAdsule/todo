import dayjs from "dayjs";
import { Pen, Trash } from "lucide-react";
import TaskDescription from "./TaskDescription";

interface TaskCardProps {
  title: string;
  description: string;
  date: Date;
  onEdit(): void;
  onDelete():void
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  description,
  date,
  onEdit,
  onDelete
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg border cursor-pointer  max-h-[300px] w-[95%]   p-2">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold">{title}</h4>
        <div>
          <div className="flex gap-x-2 items-center">
            <Pen size={14} onClick={onEdit} />
            <Trash size={14} className="text-destructive" onClick={onDelete}  />
          </div>
        </div>
      </div>

      <TaskDescription description={description} descriptionLength={80} />

      <p className="mt-2 text-sm">{dayjs(date).format("DD-MM-YYYY")}</p>
    </div>
  );
};

export default TaskCard;
