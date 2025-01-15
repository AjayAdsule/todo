import { Button } from "@/components/ui/button";

const AddTask = () => {
  return (
    <div className=" flex flex-col gap-y-2 border">
      <textarea
        placeholder="Task"
        rows={0}
        className="border-none overflow-hidden p-1 h-7  outline-none resize-none  focus:ring-0 focus:border-none"
      />
      <textarea
        placeholder="Description"
        rows={3}
        className="border-none outline-none focus:border-none h-12 focus:ring-0  resize-none p-1 "
      />
      <div className="flex justify-end">
        <Button>Save</Button>
      </div>
    </div>
  );
};

export default AddTask;
