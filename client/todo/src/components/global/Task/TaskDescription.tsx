import { useState } from "react";

const TaskDescription = ({ description }: { description: string }) => {
  const [seeMore, setSeeMore] = useState<boolean>(false);

  if (description.length > 250) {
    const sliceDescription = seeMore ? description : description.slice(0, 250);
    return (
      <p className="text-sm">
        {sliceDescription}...
        <span
          className="text-xs text-blue-500 cursor-pointer ml-2"
          onClick={() => setSeeMore(!seeMore)}
        >
          See more
        </span>
      </p>
    );
  }
  return <div className="text-sm">{description}</div>;
};

export default TaskDescription;
