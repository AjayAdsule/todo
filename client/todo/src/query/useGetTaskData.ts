import globalGetRequest from "@/lib/axios/services/globlGetRequest";
import URLS from "@/lib/axios/URLS";
import { TaskResponse } from "@/types/task.type";
import { useQuery } from "@tanstack/react-query";

const categoryPage = ["work", "workout", "learning", "reading"];
export default function useGetTaskData(key?: string) {
  const filters: { filterBy?: string; category?: string } = {};

  if (categoryPage?.includes(key as string)) {
    filters.category = key;
  } else {
    filters.filterBy = key;
  }

  const { data } = useQuery<TaskResponse>({
    queryKey: [`todo`, key],
    queryFn: () => globalGetRequest({ url: URLS.getTodo, param: filters }),
  });

  return {
    data,
  };
}
