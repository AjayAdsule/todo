import { Button } from "@/components/ui/button";
import { useState } from "react";

const TodayPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border flex h-screen">
      <div
        className={`border transition-all duration-500 ease-in-out ${
          isOpen ? "w-3/6" : "w-full"
        }`}
      >
        <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>
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

export default TodayPage;
