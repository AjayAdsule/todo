import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { InputCalender } from "@/pages/overviewPage/components/InputCalender";
import { DialogTitle } from "@radix-ui/react-dialog";
import AddTask from "./AddTask";
import TaskPriority from "./TaskPriority";

const TaskModel = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="h-auto w-auto max-w-full overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
        </DialogHeader>
        <div>
          <div className="flex  justify-between mt-2 gap-x-3">
            <div className="w-[400px]  p-1">
              <AddTask />
            </div>
            <div className="w-[250px]  flex flex-col gap-y-4">
              <InputCalender />
              <TaskPriority />
            </div>
          </div>
          <div className="flex justify-end mt-2">
            <Button>Save</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskModel;
