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
      className={`  px-4 h-screen  text-gray-800 text-base leading-relaxed ${className}`}
    >
      {children}
    </div>
  );
};

export default PageContainer;
