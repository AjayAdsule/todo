import useTaskLayout from "@/zustand/useTaskLayout";
import TaskDetailTab from "./Task/TaskDetailTab";
import TaskModel from "./Task/TaskModel";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useTaskLayout();

  return (
    <div
      className={` flex   p-2 ${isOpen ? "justify-evenly" : "justify-center"} `}
    >
      <div
        className={`border rounded-md   transition-all duration-500 ease-in-out p-3 ${
          isOpen ? "w-3/6" : "w-4/6"
        }`}
      >
        {children}
      </div>

      <div
        className={` transition-all  duration-500 ease-in-out   ${
          isOpen ? "w-2/6 opacity-100" : "max-w-0 opacity-0"
        } overflow-hidden`}
      >
        <TaskDetailTab />
      </div>
      <TaskModel />
    </div>
  );
};

export default MainContainer;
