import MainContainer from "@/components/global/MainContainer";
import PageHeader from "@/components/global/PageHeader";
import ReactTaskCard from "@/components/global/Task/ReactTaskCard";
import useGetTaskData from "@/query/useGetTaskData";

const TodayPage = () => {
  const { data } = useGetTaskData();

  return (
    <MainContainer>
      <PageHeader
        onClick={() => {
          return;
        }}
      />
      <div className="mt-4 flex flex-col gap-y-4">
        {data?.todo.pending &&
          data.todo.pending.map((tasks) => (
            <ReactTaskCard key={tasks._id} tasks={tasks} />
          ))}
      </div>
    </MainContainer>
  );
};

export default TodayPage;
