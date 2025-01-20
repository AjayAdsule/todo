import MainContainer from "@/components/global/MainContainer";
import PageHeader from "@/components/global/PageHeader";
import ReactTaskCard from "@/components/global/Task/ReactTaskCard";
import TaskTabs from "@/components/global/Task/TaskTabs";
import useGetTaskData from "@/query/useGetTaskData";
import { TodosByStatus } from "@/types/task.type";
import { useState } from "react";
import { useParams } from "react-router-dom";

const validParams = ["today", "tommorow", "next-sevenday"];
const TodayPage = () => {
  const { day } = useParams<{ day: string }>();
  const { data } = useGetTaskData(day);
  const [activeTab, setActiveTab] = useState("Progress");
  if (!validParams.includes(day)) {
    // Redirect to a Not Found page or another route
    return;
  }
  return (
    <MainContainer>
      <PageHeader
        title="Today"
        onClick={() => {
          return;
        }}
      />
      <TaskTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-4 flex flex-col gap-y-4">
        {data?.todo[activeTab as keyof TodosByStatus] &&
          data.todo[activeTab as keyof TodosByStatus].map((tasks) => (
            <ReactTaskCard key={tasks._id} tasks={tasks} />
          ))}
      </div>
    </MainContainer>
  );
};

export default TodayPage;
