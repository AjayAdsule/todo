import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import usePages from "@/hooks/usePages";
import useTask from "@/hooks/useTask";
import { InputCalender } from "@/pages/overviewPage/components/InputCalender";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Controller, FormProvider } from "react-hook-form";
import SelectOption from "../SelectOption";
import AddTask from "./AddTask";
import TaskPriority from "./TaskPriority";

const TaskModel = () => {
  const { methods, onTaskSubmit, isModelOpen, onModelClose } = useTask();

  const handleModelClose = () => {
    methods.reset({
      _id: "",
      title: "",
      description: "",
      dueDate: undefined,
      priority: "Medium",
      status: "In-progress",
      category: "work",
    });
    onModelClose();
  };

  const { isListPage } = usePages();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;
  return (
    <Dialog open={isModelOpen} onOpenChange={handleModelClose}>
      <DialogContent className="h-auto w-auto max-w-full overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
        </DialogHeader>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onTaskSubmit)}>
            <div className="flex justify-between mt-2 gap-x-3">
              <div className="w-[400px] p-1">
                <AddTask />
              </div>
              <div className="w-[250px] flex flex-col gap-y-4">
                {/* Due Date */}
                <Controller
                  name="dueDate"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <InputCalender
                        value={field.value}
                        onChange={field.onChange}
                      />
                      {errors.dueDate && (
                        <p className="text-red-500 text-xs">
                          {errors.dueDate.message}
                        </p>
                      )}
                    </div>
                  )}
                />
                {/* Priority */}
                <Controller
                  name="priority"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <TaskPriority
                        value={field.value}
                        onChange={field.onChange}
                      />
                      {errors.priority && (
                        <p className="text-red-500 text-xs">
                          {errors.priority.message}
                        </p>
                      )}
                    </div>
                  )}
                />
                {/* Status */}
                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <SelectOption
                        value={field.value}
                        onChange={field.onChange}
                        options={["In-progress", "Pending", "Completed"]}
                        label="Status"
                      />
                      {errors.status && (
                        <p className="text-red-500 text-xs">
                          {errors.status.message}
                        </p>
                      )}
                    </div>
                  )}
                />
                {/* Category */}
                {!isListPage && (
                  <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <SelectOption
                          value={field.value}
                          onChange={field.onChange}
                          options={["work", "workout", "learning", "reading"]}
                          label="Category"
                        />
                        {errors.category && (
                          <p className="text-red-500 text-xs">
                            {errors.category.message}
                          </p>
                        )}
                      </div>
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
