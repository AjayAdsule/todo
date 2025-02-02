import globalGetRequest from "@/lib/axios/services/globalGetRequest";
import URLS from "@/lib/axios/URLS";
import { TaskResponse } from "@/types/task.type";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const categoryPage = ["work", "workout", "learning", "reading"];
export default function useGetTaskData(key?: string) {
  const [searchParam, setSearchParam] = useState<string>();

  const filters: { filterBy?: string; category?: string; search?: string } = {};

  if (categoryPage?.includes(key as string)) {
    filters.category = key;
  } else {
    filters.filterBy = key;
  }

  if (searchParam) {
    filters.search = searchParam;
  }

  const { data } = useQuery<TaskResponse>({
    queryKey: [`todo`, key, searchParam ? searchParam : null],
    queryFn: () => globalGetRequest({ url: URLS.getTodo, param: filters }),
  });

  return {
    data,
    setSearchParam,
  };
}
