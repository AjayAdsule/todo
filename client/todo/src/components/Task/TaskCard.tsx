import { EllipsisVertical } from "lucide-react";

interface TaskCardProps {
  title: string;
  description: string;
  date: string;
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
      className="bg-white rounded-lg border max-h-[300px] w-[90%] shadow-sm  p-2"
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">{title}</h4>
        <EllipsisVertical size={17} />
      </div>
      <div className="text-sm  mt-3 max-h-28 overflow-hidden text-ellipsis ">
        {description}
      </div>
      <p className="mt-2 text-sm">{date}</p>
    </div>
  );
};

export default TaskCard;
