import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import useTask from "@/hooks/useTask";
import { InputCalender } from "@/pages/overviewPage/components/InputCalender";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Controller, FormProvider } from "react-hook-form";
import AddTask from "./AddTask";
import TaskPriority from "./TaskPriority";

const TaskModel = ({
  isOpen,
  onOpenChange,
  type,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  type: "edit" | "new";
}) => {
  const { methods, onTaskSubmit } = useTask(type);
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="h-auto w-auto max-w-full overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
        </DialogHeader>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onTaskSubmit)}>
            <div className="flex  justify-between mt-2 gap-x-3">
              <div className="w-[400px]  p-1">
                <AddTask />
              </div>
              <div className="w-[250px]  flex flex-col gap-y-4">
                <Controller
                  name="date"
                  control={methods.control}
                  render={({ field }) => (
                    <InputCalender
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                <Controller
                  name="priority"
                  render={({ field }) => (
                    <TaskPriority
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex justify-end mt-2">
              <Button type="submit">Save</Button>
            </div>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default TaskModel;
