import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import AddTask from "./Task/AddTask";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

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
            <div className="w-[300px] border"></div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskModel;
