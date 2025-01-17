import useTaskLayout from "@/zustand/useTaskLayout";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useTaskLayout();

  return (
    <div className="border flex h-screen justify-between">
      <div
        className={`border transition-all duration-500 ease-in-out ${
          isOpen ? "w-3/6" : "w-full"
        }`}
      >
        {children}
      </div>

      <div
        className={`border transition-all duration-500 ease-in-out ${
          isOpen ? "w-2/6 opacity-100" : "max-w-0 opacity-0"
        } overflow-hidden`}
      >
        Second
      </div>
    </div>
  );
};

export default MainContainer;
