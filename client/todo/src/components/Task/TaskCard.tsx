import { EllipsisVertical } from "lucide-react";

const TaskCard = () => {
  return (
    <div className="bg-white rounded-lg border h-[200px] w-[265px] shadow-sm  p-2">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Title</h4>
        <EllipsisVertical size={17} />
      </div>
      <div className="text-sm  mt-3 max-h-28 overflow-hidden text-ellipsis ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsum
        natus illo ab accusantium voluptatum autem corporis nesciunt eum
        commodi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
      </div>
      <p className="mt-2 text-sm">17/12/2023</p>
    </div>
  );
};

export default TaskCard;
