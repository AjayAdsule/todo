import TaskContainer from "@/components/Task/TaskContainer";
import TaskFilter from "./TaskFilter";
import TaskCard from "@/components/Task/TaskCard";
import useGetTaskData from "@/query/useGetTaskData";
import { TodosByStatus } from "@/types/task.type";

const TaskInfo = () => {
  const { data } = useGetTaskData();

  return (
    <div className="mt-3">
      <div>
        <TaskFilter />
      </div>
      <div className="flex mt-2 justify-between">
        {data?.todo &&
          (Object.keys(data.todo) as Array<keyof TodosByStatus>).map(
            (status, index) => (
              <TaskContainer key={index} heading={status}>
                {data?.todo[status].map((task) => {
                  const { title, description, dueDate, _id } = task;
                  return (
                    <TaskCard
                      key={_id}
                      title={title}
                      description={description}
                      date={dueDate}
                    />
                  );
                })}
              </TaskContainer>
            )
          )}
      </div>
    </div>
  );
};

export default TaskInfo;
