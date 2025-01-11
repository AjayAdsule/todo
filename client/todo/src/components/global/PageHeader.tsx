import { Plus } from "lucide-react";
import { Button } from "../ui/button";

const PageHeader = () => {
  return (
    <div className="flex justify-between w-full  mt-3">
      <div>
        <h1 className="text-xl font-semibold">My Todo</h1>
      </div>
      <div>
        <Button className="flex">
          New Task
          <Plus />
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
