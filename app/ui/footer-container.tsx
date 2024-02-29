"use client";

import { TextButton, IconButton } from "@/app/ui/button";
import trashIcon from "@/public/trash-icon.svg";

export function FooterContainer() {
  const handleExample = () => {
    console.log("hi");
  };
  return (
    <footer>
      <IconButton
        icon={trashIcon}
        handleClick={handleExample}
        type="circle"
        variant="default"
      />

      <TextButton
        text="Default button"
        type="default"
        handleClick={handleExample}
        style="secondary"
      />
    </footer>
  );
}
