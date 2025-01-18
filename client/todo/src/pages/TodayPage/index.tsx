import MainContainer from "@/components/global/MainContainer";
import PageHeader from "@/components/global/PageHeader";
import ReactTaskCard from "@/components/global/Task/ReactTaskCard";
import useGetTaskData from "@/query/useGetTaskData";
import useTaskLayout from "@/zustand/useTaskLayout";

const TodayPage = () => {
  const { data } = useGetTaskData();
  console.log(data);
  const { toggleOpen } = useTaskLayout();
  return (
    <MainContainer>
      <PageHeader onClick={toggleOpen} />
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
