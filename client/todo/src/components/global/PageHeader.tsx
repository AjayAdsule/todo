import { Plus } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Category, useTaskModel } from "@/zustand/useTaskModel";
import { useParams } from "react-router-dom";

interface PageHeaderProps {
  title?: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  const { category } = useParams();

  const { setTaskModelOpen } = useTaskModel();

  const handleModelOpen = () => {
    if (category) {
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
