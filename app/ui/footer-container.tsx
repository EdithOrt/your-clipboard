"use client";

import { useContext } from "react";
import { TextButton, IconButton } from "@/app/ui/button";
import { SVGComponent } from "../lib/utils";
import { readClipboard } from "../lib/updateClipboard";
import { ClipboardDataContext } from "@/contexts/clipboardData";
import { useEffect } from "react";
import moment from "moment";
import { createID } from "../lib/utils";

export function FooterContainer() {
  const {
    clipboardList,
    addClipboardItem,
    deleteAllClipboardData,
    getClipboardText,
  } = useContext(ClipboardDataContext);

  const addText = async () => {
    try {
      const clipboardText = await readClipboard();
      const currentDate = moment().unix();

      addClipboardItem({
        text: clipboardText.text,
        date: currentDate,
        favorite: false,
        copy: false,
        id: createID(),
        confirmDelete: false,
      });
    } catch (error) {
      console.error("Failed to get text from clipboard:", error);
    }
  };

  const hasFavorites = (clipboardList: any) => {
    return clipboardList.some((clipboardItem: any) => {
      return clipboardItem.favorite;
    });
  };

  const downloadTextFile = (downloadFavorites: boolean) => {
    let data;
    if (downloadFavorites) {
      data = clipboardList.filter((clipboardItem) => clipboardItem.favorite);
    } else {
      data = clipboardList;
    }
    const date = moment().format("DDMMYYYY-hh:mm:ss");
    const element = document.createElement("a");
    const file = new Blob([getClipboardText(data)], {
      type: "data:text/plain;charset=utf-8,",
    });
    element.href = URL.createObjectURL(file);
    element.download = `your-clipboard${downloadFavorites ? "_favorites_" : "_"}${date}.txt`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  useEffect(() => {
    console.log({ clipboardList });
    return () => {};
  }, [clipboardList]);

  return (
    <footer className="mt-4 grid w-full grid-cols-3 ">
      {clipboardList.length ? (
        <div className="flex gap-x-4 self-start">
          <TextButton
            text="Download all"
            type="download"
            handleClick={() => downloadTextFile(false)}
            style="secondary"
          />
          {hasFavorites(clipboardList) && (
            <TextButton
              text="Download favorites"
              type="download"
              handleClick={() => downloadTextFile(true)}
              style="secondary"
            />
          )}
        </div>
      ) : (
        <span />
      )}

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

      {clipboardList.length ? (
        <div className="mr-4 justify-self-end">
          <IconButton
            handleClick={() => deleteAllClipboardData()}
            type="circle"
            variant="default"
            hoverText="Delete all"
            style="primary"
          >
            <SVGComponent height="23" width="32" icon="trash-icon" />
          </IconButton>
        </div>
      ) : (
        <span />
      )}
    </footer>
  );
}
