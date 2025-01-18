const TaskInfo = ({ label, value }: { label: string; value?: string }) => {
  return (
    <div className="flex gap-x-8  items-center">
      <p className="text-gray-400  min-w-14">{label}</p>
      <p>{value}</p>
    </div>
  );
};

export default TaskInfo;
