import { Input } from "@/components/ui/input";
import { InputCalender } from "./InputCalender";

const Filter = () => {
  return (
    <div className="flex justify-between mt-4">
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

export default Filter;
