import PageContainer from "@/components/global/PageContainer";
import PageHeader from "@/components/global/PageHeader";
import TaskInfo from "./components/TaskInfo";

const HomePage = () => {
  return (
    <PageContainer>
      <div>
        <PageHeader />
        <div>
          <TaskInfo />
        </div>
      </div>
    </PageContainer>
  );
};

export default HomePage;
