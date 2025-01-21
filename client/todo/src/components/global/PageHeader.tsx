import { Plus } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Category, useTaskModel } from "@/zustand/useTaskModel";
import usePages from "@/hooks/usePages";

interface PageHeaderProps {
  title?: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  const { isCategoryPage, category } = usePages();
  const { setTaskModelOpen } = useTaskModel();

  const handleModelOpen = () => {
    if (isCategoryPage) {
      setTaskModelOpen(category as Category);
    } else {
      setTaskModelOpen();
    }
  };

  return (
    <div className="flex justify-between w-full  mt-3">
      <div>
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
      <div>
        <Button
          className="flex text-primary"
          onClick={handleModelOpen}
          variant={"outline"}
        >
          New Task
          <Plus />
        </Button>
      </div>
    </div>
  );
};

export default React.memo(PageHeader);
