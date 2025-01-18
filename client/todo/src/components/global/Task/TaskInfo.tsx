import StatusBadge from "./StatusBadge";

const TaskInfo = ({ label, value }: { label: string; value?: string }) => {
  return (
    <div className="flex gap-x-8  items-center">
      <p className="text-gray-400  min-w-14 text-sm">{label}</p>
      <p className="text-sm font-semibold">
        {label === "Status" ? (
          <StatusBadge variant={value}>{value}</StatusBadge>
        ) : (
          value
        )}
      </p>
    </div>
  );
};

export default TaskInfo;
