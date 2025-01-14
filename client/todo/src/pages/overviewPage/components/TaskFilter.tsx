import { Input } from "@/components/ui/input";
import { InputCalender } from "./InputCalender";

const TaskFilter = () => {
  return (
    <div className="flex justify-between mt-4 items-center ">
      <div>
        <label htmlFor="Search" className="text-xs">
          Search
        </label>
        <Input placeholder="Search" />
      </div>
      <InputCalender />
    </div>
  );
};

export default TaskFilter;
