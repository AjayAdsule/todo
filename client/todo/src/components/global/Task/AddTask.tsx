import { useFormContext } from "react-hook-form";

const AddTask = () => {
  const { register } = useFormContext();
  return (
    <div className=" flex flex-col gap-y-2 border">
      <textarea
        placeholder="Task"
        rows={0}
        className="border-none overflow-hidden p-1 h-9  outline-none resize-none  focus:ring-0 focus:border-none"
        {...register("title")}
      />
      <textarea
        {...register("description")}
        placeholder="Description"
        rows={5}
        className="border-none outline-none focus:border-none h-14 focus:ring-0  resize-none p-1 "
      />
    </div>
  );
};

export default AddTask;
