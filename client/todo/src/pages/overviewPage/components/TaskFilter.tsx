import { Input } from "@/components/ui/input";
import useTaskFilter from "@/hooks/useTaskFilters";
import { Controller } from "react-hook-form";

const TaskFilter = ({
  setSearchParam,
}: {
  setSearchParam: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const { control } = useTaskFilter({ setSearchParam });

  return (
    <div className="flex justify-end mt-4 items-center ">
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
    </div>
  );
};

export default TaskFilter;
