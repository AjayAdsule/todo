import TasklystLogo from "@/components/global/TaskListLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import useSignUp from "../hook/useSignUp";

const SignUpCard = () => {
  const { control, signUpFormSchema } = useSignUp();
  return (
    <div className=" h-fit w-[450px] rounded-lg shadow-lg p-8   flex flex-col ">
      <div className="flex justify-center">
        <TasklystLogo height="60" width="120" />
      </div>
      <form className=" flex flex-col gap-y-4">
        {signUpFormSchema.map((form, indx) => (
          <div key={indx} className="grid w-full max-w-sm items-center">
            <label
              htmlFor={form.label}
              className="after:content-['*'] after:text-red-500"
            >
              {form.label}
            </label>
            <Controller
              name={form.name}
              control={control}
              render={({ field }) => (
                <Input
                  value={field.value}
                  onChange={field.onChange}
                  type={form.type}
                  placeholder={form.placeholder}
                />
              )}
            />
          </div>
        ))}
        <Button>Register</Button>
      </form>
    </div>
  );
};

export default SignUpCard;
