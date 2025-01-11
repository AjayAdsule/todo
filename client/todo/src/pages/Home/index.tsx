import PageContainer from "@/components/global/PageContainer";
import PageHeader from "@/components/global/PageHeader";
import TaskContainer from "@/components/Task/TaskContainer";
import Filter from "./components/Filter";

const HomePage = () => {
  return (
    <PageContainer>
      <div>
        <PageHeader />
        <Filter />
        <div className="flex mt-3">
          <TaskContainer />
        </div>
      </div>
    </PageContainer>
  );
};

export default HomePage;
