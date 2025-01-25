import { setAxiosAuthHeader } from "@/lib/axios/axiosConfig";
import globalPostRequest from "@/lib/axios/services/globalPostRequest";
import URLS from "@/lib/axios/URLS";

import {
  SignInFormSchema,
  SignInType,
} from "@/types/authTypes/userSignUpIn.type";
import { UserLoginResponse } from "@/types/user/userResponse";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

type SigninResponse = {
  token: string;
  success: boolean;
  user: UserLoginResponse;
};
const signInSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(4, "Password must be at least 4 characters")
    .max(20, "Password must be at most 20 characters"),
});
export default function useSignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInType>({
    resolver: zodResolver(signInSchema),
  });

  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: SignInType) =>
      globalPostRequest<SignInType, SigninResponse>({ url: URLS.signIn, data }),
    onSuccess: (data) => {
      if (data.token && data.success) {
        const token = data.token;
        localStorage.setItem("token", token);
        setAxiosAuthHeader(token);
        navigate("/todo/overview");
      }
    },
  });

  const signFormSchema: SignInFormSchema[] = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Eg john@gmail.com",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Eg 1234",
    },
  ];

  const onSignin = (data: SignInType) => {
    mutate(data);
  };

  return {
    signFormSchema,
    control,
    handleSubmit,
    onSignin,
    isLoading: isPending,
    errors,
  };
}
