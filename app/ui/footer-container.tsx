"use client";

import { useContext } from "react";
import { TextButton, IconButton } from "@/app/ui/button";
import { SVGComponent } from "../lib/utils";
import { readClipboard } from "../lib/getClipboard";
import { ClipboardDataContext } from "@/contexts/clipboardData";
import { useEffect } from "react";
import moment from "moment";

export function FooterContainer() {
  const { clipboardList, addClipboardItem } = useContext(ClipboardDataContext);

  const addText = async () => {
    try {
      const clipboardText = await readClipboard();
      const currentDate = moment().format("LLL");

      addClipboardItem({
        text: clipboardText.text,
        date: currentDate,
        favorite: false,
        copy: false,
        id: "adcac",
      });
    } catch (error) {
      console.error("Failed to get text from clipboard:", error);
    }
  };
  const handleExample = () => {
    console.log("hi");
  };

  useEffect(() => {
    console.log({ clipboardList });
    return () => {};
  }, [clipboardList]);

  return (
    <footer className="mt-4 grid w-full grid-cols-3 ">
      <div className="flex gap-x-4 self-start">
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

      <div className="self-center justify-self-center">
        <IconButton
          handleClick={addText}
          type="circle"
          variant="default"
          hoverText="Add text"
          style="primary"
        >
          <SVGComponent height="23" width="32" icon="add-icon" />
        </IconButton>
      </div>

      <div className="mr-4 justify-self-end">
        <IconButton
          handleClick={handleExample}
          type="circle"
          variant="default"
          hoverText="Clear all"
          style="primary"
        >
          <SVGComponent height="23" width="32" icon="trash-icon" />
        </IconButton>
      </div>
    </footer>
  );
}
