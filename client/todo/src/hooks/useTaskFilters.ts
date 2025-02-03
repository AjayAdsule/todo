import { useForm } from "react-hook-form";
import useDebounce from "./useDebounce";

interface TaskFilterFormProps {
  search: string;
}

export default function useTaskFilter({
  setSearchParam,
}: {
  setSearchParam: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  const { control, watch } = useForm<TaskFilterFormProps>({
    defaultValues: { search: "" },
  });

  const { search } = watch();
  const handleSearch = (value?: string) => setSearchParam(value as string);
  useDebounce(handleSearch, search, 1000);

  return {
    control,
    search,
  };
}
