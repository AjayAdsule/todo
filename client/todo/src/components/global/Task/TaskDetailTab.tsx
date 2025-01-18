import useTaskLayout from "@/zustand/useTaskLayout";
import { X } from "lucide-react";
import TaskDescription from "./TaskDescription";
import TaskInfo from "./TaskInfo";

const TaskDetailTab = () => {
  const { task, setClose, setActiveReset } = useTaskLayout();

  if (!task) return <></>;
  return (
    <div className="p-3">
      <div className="flex justify-between">
        <h3 className="font-semibold text-gray-400">Task Detail</h3>
        <X
          size={16}
          className="cursor-pointer"
          onClick={() => {
            setClose();
            setActiveReset();
          }}
        />
      </div>
      <div className=" p-2">
        <div className="border border-primary/30 rounded-md  px-2 py-4  task_detail_main">
          <p className="text-xs text-foreground">My Work Task</p>
          <div className="task_details flex flex-col gap-y-1 mt-2 font-semibold">
            <h2 className="text-xl">{task?.title}</h2>
            <TaskDescription description={task.description} />
          </div>
          <div className="mt-6 flex flex-col gap-y-4  ">
            <TaskInfo label="Status" value={task?.status} />
            <TaskInfo
              label="Date"
              value={new Date(task.dueDate).toDateString()}
            />
            <TaskInfo label="Type" value="Daily Task" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailTab;
