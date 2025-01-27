import TaskCard from "@/components/global/Task/OverViewTaskCard";
import TaskContainer from "@/components/global/Task/TaskContainer";
import useGetTaskData from "@/query/useGetTaskData";
import { TodosByStatus } from "@/types/task.type";

import NoTask from "@/components/global/Task/NoTask";
import { useTaskModel } from "@/zustand/useTaskModel";
import TaskFilter from "./TaskFilter";

const TaskInfo = () => {
  const { data, setSearchParam } = useGetTaskData("overview");
  const { onEditOpenTaskModel } = useTaskModel();

  if (data?.taskLength === 0) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <NoTask />
      </div>
    );
  }

  return (
    <div className="mt-3">
      <div>
        <TaskFilter setSearchParam={setSearchParam} />
      </div>
      <div className="flex mt-2 justify-between gap-x-12">
        {data?.todo &&
          (Object.keys(data.todo) as Array<keyof TodosByStatus>).map(
            (status, index) => (
              <TaskContainer
                key={index}
                heading={status}
                className="w-2/6 rounded-3xl"
                count={data.todo[status].length}
              >
                {data?.todo[status].map((task) => {
                  const { title, description, dueDate, _id } = task;
                  return (
                    <TaskCard
                      key={_id}
                      title={title}
                      description={description}
                      date={dueDate}
                      onEdit={() => onEditOpenTaskModel(task)}
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
