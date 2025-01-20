import PageContainer from "@/components/global/PageContainer";
import PageHeader from "@/components/global/PageHeader";
import TaskInfo from "./components/TaskInfo";

const OverviewPage = () => {
  return (
    <PageContainer>
      <div>
        <PageHeader
          onClick={() => {
            return;
          }}
        />
        <div>
          <TaskInfo />
        </div>
      </div>
    </PageContainer>
  );
};

export default OverviewPage;
