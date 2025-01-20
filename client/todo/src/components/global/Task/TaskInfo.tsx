import StatusBadge from "./StatusBadge";

const TaskInfo = ({
  label,
  value,
  badge,
  variant,
}: {
  label: string;
  value?: string;
  badge?: boolean;
  variant?: "danger" | "active" | "success" | "secondary";
}) => {
  return (
    <div className="flex gap-x-8  items-center">
      <p className="text-gray-400  min-w-14 text-sm">{label}</p>
      <p className="text-sm font-semibold">
        {badge ? <StatusBadge variant={variant}>{value}</StatusBadge> : value}
      </p>
    </div>
  );
};

export default TaskInfo;
