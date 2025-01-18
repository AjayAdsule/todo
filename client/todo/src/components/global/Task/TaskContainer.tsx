const TaskContainer = ({
  children,
  heading,
  className,
}: {
  children: React.ReactNode;
  heading: string;
  className?: string;
}) => {
  return (
    <div className={`mt-4 ${className} `}>
      <h5 className="capitalize text-center font-semibold">{heading}</h5>
      <div className="border rounded-lg  p-4  flex flex-col gap-y-3 h-[70vh] overflow-auto   items-center">
        {children}
      </div>
    </div>
  );
};

export default TaskContainer;
