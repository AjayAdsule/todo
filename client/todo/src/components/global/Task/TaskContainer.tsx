import { cn } from "@/lib/utils";

const TaskContainer = ({
  children,
  heading,
  className,
  count,
}: {
  children: React.ReactNode;
  heading: string;
  className?: string;
  count: number;
}) => {
  return (
    <div className={`mt-4 ${className} `}>
      <h5 className="capitalize text-start flex gap-x-2 items-center font-semibold border rounded-lg p-2 bg-[#F6F6F6] ">
        {heading}
        <span
          className={cn(
            "h-6 w-6 rounded-full flex items-center justify-center text-white text-xs font-bold",
            {
              "bg-green-400": heading === "Completed",
              "bg-blue-400": heading === "Progress",
              "bg-red-400": heading === "Pending",
            }
          )}
        >
          {count}
        </span>
      </h5>
      <div className="  flex flex-col gap-y-3 mt-6 h-[70vh]   overflow-auto   items-center">
        {children}
      </div>
    </div>
  );
};

export default TaskContainer;
