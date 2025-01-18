import MainContainer from "@/components/global/MainContainer";
import PageHeader from "@/components/global/PageHeader";
import ReactTaskCard from "@/components/global/Task/ReactTaskCard";
import TaskTabs from "@/components/global/Task/TaskTabs";
import useGetTaskData from "@/query/useGetTaskData";
import { useState } from "react";

const TodayPage = () => {
  const { data } = useGetTaskData();
  const [activeTab, setActiveTab] = useState("Progress");
  console.log(data?.todo);
  return (
    <MainContainer>
      <PageHeader
        onClick={() => {
          return;
        }}
      />
      <TaskTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-4 flex flex-col gap-y-4">
        {data?.todo[activeTab] &&
          data.todo[activeTab].map((tasks) => (
            <ReactTaskCard key={tasks._id} tasks={tasks} />
          ))}
      </div>
    </MainContainer>
  );
};

export default TodayPage;
