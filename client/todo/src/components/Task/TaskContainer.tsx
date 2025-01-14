import useGetTaskData from "@/query/usegetTaskData";
import TaskCard from "./TaskCard";

const TaskContainer = () => {
  const { data } = useGetTaskData();

  return (
    <div className="bg-primary/20  w-[300px] p-4  h-screen">
      <TaskCard />
    </div>
  );
};

export default TaskContainer;
