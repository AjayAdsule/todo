const TaskContainer = ({
  children,
  heading,
}: {
  children: React.ReactNode;
  heading: string;
}) => {
  return (
    <div className="mt-4">
      <h5 className="capitalize">{heading}</h5>
      <div className="bg-primary/20  w-[320px] p-4  flex flex-col gap-y-3 h-[70vh] overflow-auto   items-center">
        {children}
      </div>
    </div>
  );
};

export default TaskContainer;
