import MainContainer from "@/components/global/MainContainer";
import { Button } from "@/components/ui/button";
import useTaskLayout from "@/zustand/useTaskLayout";

const TodayPage = () => {
  const { toggleOpen } = useTaskLayout();
  return (
    <MainContainer>
      <Button onClick={toggleOpen}>Toggle</Button>
    </MainContainer>
  );
};

export default TodayPage;
