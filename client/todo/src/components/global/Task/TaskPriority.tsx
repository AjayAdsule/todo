import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Flag } from "lucide-react";

interface TaskPriorityProps {
  onChange(): void;
  value: string | undefined;
}

const TaskPriority: React.FC<TaskPriorityProps> = ({ onChange, value }) => {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger>
        <SelectValue placeholder="Priority" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="High">
          <div className="flex items-center gap-x-2 text-red-500">
            <Flag size={11} />
            <span>High</span>
          </div>
        </SelectItem>
        <SelectItem value="Medium">
          <div className="flex items-center gap-x-2 text-blue-500">
            <Flag size={11} />
            <span>Medium</span>
          </div>
        </SelectItem>
        <SelectItem value="Low">
          <div className="flex items-center gap-x-2 text-green-500">
            <Flag size={11} />
            <span>Low</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default TaskPriority;
