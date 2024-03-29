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
    handleModal,
    updateAlertList,
  } = useContext(ClipboardDataContext);

  const addText = async () => {
    try {
      const clipboardText = await readClipboard();
      const currentDate = moment().unix();

      if (clipboardText?.text !== "") {
        addClipboardItem({
          text: clipboardText.text,
          date: currentDate,
          favorite: false,
          copy: false,
          id: createID(),
          confirmDelete: false,
        });
      } else {
        updateAlertList({
          message: "There is no text to add",
          id: createID(),
          type: "error",
          active: true,
        });
      }
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

  return (
    <footer className="mt-4 grid w-full grid-cols-11">
      {clipboardList.length ? (
        <div className="col-start-1 col-end-6 flex gap-x-5 self-start">
          <div className="hidden md:block">
            <TextButton
              text="Download all"
              handleClick={() => downloadTextFile(false)}
              style="secondary"
            />
          </div>

          <div className="block md:hidden">
            <IconButton
              handleClick={() => downloadTextFile(false)}
              type="circle"
              variant="default"
              hoverText="Download all"
              style="primary"
            >
              <SVGComponent width="23" height="32" icon="download-icon" />
            </IconButton>
          </div>

          <div className="hidden lg:block">
            {hasFavorites(clipboardList) && (
              <TextButton
                text="Download favorites"
                handleClick={() => downloadTextFile(true)}
                style="secondary"
              />
            )}
          </div>
        </div>
      ) : (
        <span />
      )}

      <div className="col-start-6 col-end-7 self-center justify-self-center">
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
        <div className="col-start-7 col-end-12 justify-self-end">
          <IconButton
            handleClick={() => handleModal()}
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
