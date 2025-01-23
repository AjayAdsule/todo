import { useState } from "react";

const TaskDescription = ({
  description,
  descriptionLength,
}: {
  description: string;
  descriptionLength: number;
}) => {
  const [seeMore, setSeeMore] = useState<boolean>(false);

  if (description.length > descriptionLength) {
    const sliceDescription = seeMore
      ? description
      : description.slice(0, descriptionLength);
    return (
      <p className="text-sm">
        {sliceDescription}
        <span
          className="text-xs text-primary cursor-pointer ml-2"
          onClick={() => setSeeMore(!seeMore)}
        >
          {seeMore ? "see less" : "see more"}
        </span>
      </p>
    );
  }
  return <div className="text-sm">{description}</div>;
};

export default TaskDescription;
