import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import useTask from "@/hooks/useTask";
import { InputCalender } from "@/pages/overviewPage/components/InputCalender";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Controller, FormProvider } from "react-hook-form";
import AddTask from "./AddTask";
import TaskPriority from "./TaskPriority";
import SelectOption from "../SelectOption";
import usePages from "@/hooks/usePages";

const TaskModel = () => {
  const { methods, onTaskSubmit, isModelOpen, onModelClose } = useTask();
  const handleModelClose = () => {
    methods.reset({
      id: "",
      title: "",
      description: "",
      dueDate: "",
      priority: "Medium",
      status: "In-progress",
      category: "work",
    });
    onModelClose();
  };
  const { isCategoryPage } = usePages();

  return (
    <Dialog open={isModelOpen} onOpenChange={handleModelClose}>
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
                  name="dueDate"
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
                <Controller
                  name="status"
                  render={({ field }) => (
                    <SelectOption
                      value={field.value}
                      onChange={field.onChange}
                      options={["In-progress", "Pending", "Completed"]}
                      label="Status"
                    />
                  )}
                />
                {!isCategoryPage && (
                  <Controller
                    name="category"
                    render={({ field }) => (
                      <SelectOption
                        value={field.value}
                        onChange={field.onChange}
                        options={["work", "workout", "learning", "reading"]}
                        label="Category"
                      />
                    )}
                  />
                )}
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Button type="submit">Save</Button>
            </div>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default TaskModel;
