import useTaskLayout from "@/zustand/useTaskLayout";
import TaskDescription from "./TaskDescription";
import TaskInfo from "./TaskInfo";

const TaskDetailTab = () => {
  const { task } = useTaskLayout();

  let description =
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit.   Architecto alias minima ea sed explicabo ex dicta error perferendis expedita rerum fugiat, similique, saepe consectetur eaque aspernatur dolor vero eveniet maxime! Architecto alias minima ea sed explicabo ex dicta error perferendis expedita rerum fugiat, similique, saepe consectetur eaque aspernatur dolor vero  eveniet maxime!";

  if (!task) return <></>;
  return (
    <div className="p-3">
      <h3 className="font-semibold text-gray-400">Task Detail</h3>
      <div className=" p-2">
        <div className="border px-2 py-4  task_detail_main">
          <p className="text-xs text-foreground">My Work Task</p>
          <div className="task_details flex flex-col gap-y-1 mt-2 font-semibold">
            <h2>{task?.title}</h2>
            <TaskDescription description={description} />
          </div>
          <div className="mt-6 flex flex-col gap-y-2  ">
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
