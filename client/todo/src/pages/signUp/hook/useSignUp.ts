import { SignFormSchema } from "@/types/authTypes/userSignUpIn.type";
import { useForm } from "react-hook-form";

export default function useSignUp() {
  const { control } = useForm();
  const signUpFormSchema: SignFormSchema[] = [
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
  ];

  return {
    signUpFormSchema,
    control,
  };
}
