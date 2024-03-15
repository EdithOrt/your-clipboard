"use client";

import { useContext, useEffect, useState } from "react";
import { Card } from "./card";
import { readClipboard } from "../lib/updateClipboard";
import { EmptyState } from "./empty-state";
import { ClipboardDataContext } from "@/contexts/clipboardData";
import moment from "moment";
import { SVGComponent } from "../lib/utils";

export function CardsContainer() {
  const {
    clipboardList,
    getSessionStorageData,
    updateClipboardItem,
    deleteClipboardItem,
    loader,
    setLoader,
  } = useContext(ClipboardDataContext);

  useEffect(() => {
    getSessionStorageData("clipboardData");

    return () => {};
  }, []);

  return (
    <article className="h-[70vh] rounded-2xl border bg-orange-light pb-2 pr-2 pt-2">
      {loader ? (
        <div className="flex h-full w-full items-center justify-center">
          <div role="status">
            <SVGComponent width="213" height="123" icon="spin-icon" />
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="cards-container grid  h-full snap-start grid-cols-4 gap-5 overflow-y-auto px-4 pb-4 pt-4">
            {!clipboardList.length ? (
              <EmptyState text='Start by copying text and press the "+" (Add text) button' />
            ) : (
              clipboardList.map((clipboardItem) => (
                <Card
                  date={moment.unix(clipboardItem.date).format("LLL")}
                  text={clipboardItem.text}
                  handleClose={() =>
                    updateClipboardItem({
                      id: clipboardItem.id,
                      action: "confirmDelete",
                    })
                  }
                  key={clipboardItem.id}
                  handleFavorites={() =>
                    updateClipboardItem({
                      id: clipboardItem.id,
                      action: "favorite",
                    })
                  }
                  isFavorite={clipboardItem.favorite}
                  displayConfirmView={clipboardItem.confirmDelete}
                  handleDelete={() => deleteClipboardItem(clipboardItem.id)}
                />
              ))
            )}
          </div>
        </>
      )}
    </article>
  );
}
