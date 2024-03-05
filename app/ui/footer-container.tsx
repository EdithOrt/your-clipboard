"use client";

import { TextButton, IconButton } from "@/app/ui/button";
import trashIcon from "@/public/trash-icon.svg";
import { SVGComponent } from "../lib/utils";
import { readClipboard } from "../lib/getClipboard";

export function FooterContainer() {
  const addText = () => {
    readClipboard();
  };
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

      <div>
        <IconButton
          handleClick={addText}
          type="circle"
          variant="default"
          hoverText="Add text"
        >
          <SVGComponent height="23" width="32" icon="add-icon" />
        </IconButton>
      </div>

      <div className="mr-4 self-end justify-self-center">
        <IconButton
          handleClick={handleExample}
          type="circle"
          variant="default"
          hoverText="Clear all"
        >
          <SVGComponent height="23" width="32" icon="trash-icon" />
        </IconButton>
      </div>
    </footer>
  );
}
