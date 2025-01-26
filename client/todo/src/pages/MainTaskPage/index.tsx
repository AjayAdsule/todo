import MainContainer from "@/components/global/MainContainer";
import PageHeader from "@/components/global/PageHeader";
import NotFound from "@/components/global/PageNotFound";
import NoTask from "@/components/global/Task/NoTask";
import ReactTaskCard from "@/components/global/Task/ReactTaskCard";
import TaskTabs from "@/components/global/Task/TaskTabs";
import useGetTaskData from "@/query/useGetTaskData";
import { ActiveTab, TodosByStatus } from "@/types/task.type";
import { useState } from "react";
import { useParams } from "react-router-dom";

const validParams = [
  "today",
  "tomorrow",
  "next-sevenday",
  "work",
  "workout",
  "learning",
  "reading",
];
const MainTaskPage = () => {
  const { day, category } = useParams<{ day: string; category: string }>();
  const page = day || category;

  const { data } = useGetTaskData(page);

  const [activeTab, setActiveTab] = useState<ActiveTab>("Progress");

  if (!validParams.includes(page as string)) {
    return <NotFound />;
  }

  return (
    <MainContainer>
      <PageHeader title={page} />
      <TaskTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-4 flex flex-col gap-y-4">
        {data?.todo[activeTab as keyof TodosByStatus] &&
          data.todo[activeTab as keyof TodosByStatus].map((tasks) => (
            <ReactTaskCard key={tasks._id} tasks={tasks} />
          ))}
      </div>
      {!data?.todo[activeTab as keyof TodosByStatus]?.length && <NoTask />}
    </MainContainer>
  );
};

export default MainTaskPage;
