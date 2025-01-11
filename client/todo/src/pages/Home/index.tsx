import PageContainer from "@/components/global/PageContainer";
import PageHeader from "@/components/global/PageHeader";
import Filter from "./components/Filter";

const HomePage = () => {
  return (
    <PageContainer>
      <div>
        <PageHeader />
        <Filter />
      </div>
    </PageContainer>
  );
};

export default HomePage;
