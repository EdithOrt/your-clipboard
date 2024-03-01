"use client";

import { TextButton, IconButton } from "@/app/ui/button";
import trashIcon from "@/public/trash-icon.svg";

export function FooterContainer() {
  const handleExample = () => {
    console.log("hi");
  };
  return (
    <footer className="mt-4 flex w-full items-start justify-between ">
      <div className="flex gap-x-4">
        <TextButton
          text="Default button"
          type="default"
          handleClick={handleExample}
          style="secondary"
        />
        <TextButton
          text="Default button"
          type="default"
          handleClick={handleExample}
          style="secondary"
        />
      </div>

      <div className="mr-4 self-end justify-self-center">
        <IconButton
          icon={trashIcon}
          handleClick={handleExample}
          type="circle"
          variant="default"
        />
      </div>
    </footer>
  );
}
