"use client";

import { TextButton, IconButton } from "@/app/ui/button";
import trashIcon from "@/public/trash-icon.svg";
import { SVGComponent } from "../lib/utils";

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
        <IconButton handleClick={handleExample} type="circle" variant="default">
          <SVGComponent height="23" width="32" icon="trash-icon" />
        </IconButton>
      </div>
    </footer>
  );
}
