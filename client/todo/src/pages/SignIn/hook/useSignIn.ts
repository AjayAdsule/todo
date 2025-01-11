import { SignFormSchema } from "@/types/authTypes/userSignUpIn.type";
import { useForm } from "react-hook-form";

export default function useSignIn() {
  const { control } = useForm();
  const signFormSchema: SignFormSchema[] = [
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

  return {
    signFormSchema,
    control,
  };
}
