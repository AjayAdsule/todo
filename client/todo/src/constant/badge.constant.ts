export const STATUS_CONST: Record<
  string,
  "active" | "danger" | "success" | "secondary"
> = {
  Pending: "danger",
  Completed: "success",
  ["In-progress"]: "active",
};

export const PRIORITY_CONST: Record<
  string,
  "active" | "danger" | "success" | "secondary"
> = {
  High: "success",
  Medium: "active",
  Low: "danger",
};
