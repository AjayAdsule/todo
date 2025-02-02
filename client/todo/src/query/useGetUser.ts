import globalGetRequest from "@/lib/axios/services/globalGetRequest";
import URLS from "@/lib/axios/URLS";
import { UserLoginResponse } from "@/types/user/userResponse";
import { useUsers } from "@/zustand/useUser";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

interface UserResponse {
  user: UserLoginResponse;
}
export default function useGetUser() {
  const { setUser } = useUsers();
  const { data } = useQuery<UserResponse>({
    queryFn: () => globalGetRequest({ url: URLS.getUser }),
    queryKey: ["user"],
  });

  useEffect(() => {
    if (data?.user) {
      setUser(data.user);
    }
  }, [data?.user]);

  return { data };
}
