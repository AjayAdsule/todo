import { Plus } from "lucide-react";
import { Button } from "../ui/button";

interface PageHeaderProps {
  onClick: () => void;
}

const PageHeader = ({ onClick }: PageHeaderProps) => {
  return (
    <div className="flex justify-between w-full  mt-3">
      <div>
        <h1 className="text-xl font-semibold">Today</h1>
      </div>
      <div>
        <Button
          className="flex text-primary"
          onClick={onClick}
          variant={"outline"}
        >
          New Task
          <Plus />
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
