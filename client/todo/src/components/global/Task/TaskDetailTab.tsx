import { PRIORITY_CONST, STATUS_CONST } from "@/constant/badge.constant";
import useTaskLayout from "@/zustand/useTaskLayout";
import { X } from "lucide-react";
import React from "react";
import TaskDescription from "./TaskDescription";
import TaskInfo from "./TaskInfo";

const TaskDetailTab = () => {
  const { task, setClose, setActiveReset } = useTaskLayout();

  if (!task) return <></>;
  return (
    <div className="p-3 border bg-white shadow-sm rounded-md">
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
            <TaskDescription
              description={task.description}
              descriptionLength={200}
            />
          </div>
          <div className="mt-6 flex flex-col gap-y-4  ">
            <TaskInfo label="Date" value={task.dueDate} />
            <TaskInfo label="Type" value="Daily Task" />
            <TaskInfo
              label="Priority"
              value={task.priority}
              badge={true}
              variant={PRIORITY_CONST[task.priority]}
            />
            <TaskInfo
              label="Status"
              value={task?.status}
              badge={true}
              variant={STATUS_CONST[task?.status]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TaskDetailTab);
