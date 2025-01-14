import TaskCard from "@/components/Task/TaskCard";
import TaskContainer from "@/components/Task/TaskContainer";
import useGetTaskData from "@/query/useGetTaskData";
import { TodosByStatus } from "@/types/task.type";
import { useState } from "react";
import TaskFilter from "./TaskFilter";

const TaskInfo = () => {
  const { data } = useGetTaskData();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="mt-3">
      <div>
        <TaskFilter />
      </div>
      <div className="flex mt-2 justify-between gap-x-12">
        {data?.todo &&
          (Object.keys(data.todo) as Array<keyof TodosByStatus>).map(
            (status, index) => (
              <TaskContainer
                key={index}
                heading={status}
                className="w-2/6 rounded-3xl  "
              >
                {data?.todo[status].map((task) => {
                  const { title, description, dueDate, _id } = task;
                  return (
                    <TaskCard
                      key={_id}
                      title={title}
                      description={description}
                      date={dueDate}
                      onClick={() => setIsOpen(true)}
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
