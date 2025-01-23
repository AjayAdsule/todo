import { EllipsisVertical } from "lucide-react";
import TaskDescription from "./TaskDescription";

interface TaskCardProps {
  title: string;
  description: string;
  date: string | Date;
  onClick(): void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  description,
  date,
  onClick,
}) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg border cursor-pointer  max-h-[300px] w-[95%]   p-2"
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">{title}</h4>
        <div>
          <EllipsisVertical size={17} />
        </div>
      </div>

      <TaskDescription description={description} descriptionLength={80} />

      <p className="mt-2 text-sm">{typeof date === "string" ? date : ""}</p>
    </div>
  );
};

export default TaskCard;
