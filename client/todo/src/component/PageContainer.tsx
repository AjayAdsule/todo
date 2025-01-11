import React from "react";

const PageContainer = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`max-w-screen-lg mx-auto h-screen px-4 py-6 text-gray-800 text-base leading-relaxed ${className}`}
    >
      {children}
    </div>
  );
};

export default PageContainer;
