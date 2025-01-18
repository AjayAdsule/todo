import { Button } from "@/components/ui/button";
import useTaskLayout from "@/zustand/useTaskLayout";
import TaskInfo from "./TaskInfo";

const TaskDetailTab = () => {
  const { task } = useTaskLayout();
  console.log(task);
  if (!task) return <></>;
  return (
    <div className="p-3">
      <h3 className="font-semibold text-gray-300">Task Detail</h3>
      <div className=" p-2">
        <div className="border px-2 py-4  task_detail_main">
          <p className="text-xs text-foreground">My Work Task</p>
          <div className="task_details flex flex-col gap-y-1 mt-2 font-semibold">
            <h2>{task?.title}</h2>
            <p className="text-sm">{task?.description}</p>
          </div>
          <div className="mt-6 flex flex-col gap-y-2  ">
            <TaskInfo label="Status" value={task?.status} />
            <TaskInfo
              label="Date"
              value={new Date(task.dueDate).toDateString()}
            />
            <TaskInfo label="Type" value="Daily Task" />
          </div>
          <div className="mt-6">
            <Button className="w-full">Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailTab;
