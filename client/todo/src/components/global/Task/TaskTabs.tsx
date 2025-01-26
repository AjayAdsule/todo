import { ActiveTab } from "@/types/task.type";
import React from "react";

interface TaskTabProps {
  activeTab: ActiveTab;
  setActiveTab: React.Dispatch<React.SetStateAction<ActiveTab>>;
}

const TaskTabs: React.FC<TaskTabProps> = ({ activeTab, setActiveTab }) => {
  const TABS = ["Progress", "Pending", "Completed"];

  return (
    <div className="flex gap-x-3 mt-3">
      {TABS.map((item) => (
        <p
          className={`text-xs cursor-pointer ${
            activeTab === item && "text-primary border-b border-primary"
          } `}
          onClick={() => setActiveTab(item)}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default React.memo(TaskTabs);
