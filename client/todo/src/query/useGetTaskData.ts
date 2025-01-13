import globalGetRequest from "@/lib/axios/services/globlGetRequest";
import URLS from "@/lib/axios/URLS";
import { TaskResponse } from "@/types/task.type";
import { useQuery } from "@tanstack/react-query";

export default function useGetTaskData() {
  const { data } = useQuery<TaskResponse>({
    queryKey: ["todos"],
    queryFn: () => globalGetRequest({ url: URLS.getTodo }),
  });

  return {
    data,
  };
}
