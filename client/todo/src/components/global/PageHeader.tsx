import { Plus } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useTaskModel } from "@/zustand/useTaskModel";

interface PageHeaderProps {
  title?: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  const { setTaskModelOpen } = useTaskModel();

  return (
    <div className="flex justify-between w-full  mt-3">
      <div>
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
      <div>
        <Button
          className="flex text-primary"
          onClick={setTaskModelOpen}
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
