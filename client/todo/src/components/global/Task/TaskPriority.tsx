import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Flag } from "lucide-react";

const TaskPriority = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="high">
          <div className="flex items-center gap-x-2 text-red-500">
            <Flag size={11} />
            <span>High</span>
          </div>
        </SelectItem>
        <SelectItem value="medium">
          <div className="flex items-center gap-x-2 text-blue-500">
            <Flag size={11} />
            <span>Medium</span>
          </div>
        </SelectItem>
        <SelectItem value="low">
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
