import { useForm } from "react-hook-form";
import useDebounce from "./useDebounce";

export default function useTaskFilter({
  setSearchParam,
}: {
  setSearchParam: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { control, watch } = useForm({
    defaultValues: { search: "", date: "" },
  });

  const { search } = watch();
  const handleSearch = (value?: string) => setSearchParam(value as string);
  useDebounce(handleSearch, search, 1000);

  return {
    control,
    search,
  };
}
