import { Input } from "@/components/ui/input";
import { InputCalender } from "./InputCalender";
import useTaskFilter from "@/hooks/useTaskFilters";
import { Controller } from "react-hook-form";

const TaskFilter = ({
  setSearchParam,
}: {
  setSearchParam: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { control } = useTaskFilter({ setSearchParam });

  return (
    <div className="flex justify-between mt-4 items-center ">
      <div>
        <label htmlFor="Search" className="text-xs">
          Search
        </label>
        <Controller
          name="search"
          control={control}
          render={({ field }) => (
            <Input
              placeholder="Search"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>
      <Controller
        name="date"
        control={control}
        render={({ field }) => <InputCalender {...field} />}
      />
    </div>
  );
};

export default TaskFilter;
