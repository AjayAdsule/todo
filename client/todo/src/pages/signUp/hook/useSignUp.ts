import { useToast } from "@/hooks/use-toast";
import globalPostRequest from "@/lib/axios/services/globalPostRequest";
import URLS from "@/lib/axios/URLS";
import {
  SignUpFormSchema,
  SignUpType,
} from "@/types/authTypes/userSignUpIn.type";
import { UserLoginResponse } from "@/types/user/userResponse";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const signUpValidation = z
  .object({
    name: z.string().min(3, "Name should be at least 3 character"),
    email: z.string().email("Invalid email format"),
    password: z
      .string()
      .min(4, "Password must be at least 4 characters")
      .max(20, "Password must be at most 20 characters"),
    confirm_password: z
      .string()
      .min(4, "Password must be at least 4 characters")
      .max(20, "Password must be at most 20 characters"),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"], // Points to confirm_password field for error
    message: "Passwords must match",
  });

interface UserSignUpRespnse {
  success: boolean;
  users: UserLoginResponse;
  message?: string;
}

export default function useSignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpType>({
    resolver: zodResolver(signUpValidation),
  });
  const { toast } = useToast();
  const navigate = useNavigate();
  const { mutate: signupMutate, isPending: isLoading } = useMutation({
    mutationFn: (data: SignUpType) =>
      globalPostRequest<SignUpType, UserSignUpRespnse>({
        url: URLS.signUp,
        data,
      }),
    onSuccess: (data) => {
      if (data.success) {
        toast({
          description: "Account has create successfully please login",
        });
        navigate("/signin");
      }
    },
    onError: (err) =>
      toast({ description: err.message, variant: "destructive" }),
  });

  const signUpFormSchema: SignUpFormSchema[] = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Eg John",
    },
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
    {
      name: "confirm_password",
      label: "Confirm Password",
      type: "password",
      placeholder: "Eg 1234",
    },
  ];

  const onSignUpSubmit = (data: SignUpType) => {
    signupMutate(data);
  };

  return {
    signUpFormSchema,
    control,
    errors,
    isLoading,
    handleSubmit,
    onSignUpSubmit,
  };
}
