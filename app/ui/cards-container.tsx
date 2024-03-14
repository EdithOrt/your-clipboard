"use client";

import { useContext, useEffect, useState } from "react";
import { Card } from "./card";
import { readClipboard } from "../lib/getClipboard";
import { EmptyState } from "./empty-state";
import { ClipboardDataContext } from "@/contexts/clipboardData";
import moment from "moment";

interface ClipboardData {
  text: string;
  date: Date;
  favorite: boolean;
}

export function CardsContainer() {
  const { clipboardList, getSessionStorageData, updateClipboardItem } =
    useContext(ClipboardDataContext);

  const handleClick = () => {
    return console.log("click to close");
  };

  const handleExample = () => {
    return console.log("hi");
  };

  useEffect(() => {
    getSessionStorageData("clipboardData");

    return () => {};
  }, []);

  return (
    <article className="h-[70vh] rounded-2xl border bg-orange-light pb-2 pr-2 pt-2">
      <div className="cards-container grid  h-full snap-start grid-cols-4 gap-5 overflow-y-auto px-4 pb-4 pt-4">
        {!clipboardList.length ? (
          <EmptyState text='Start by copying text and press the "+" (Add text) button' />
        ) : (
          clipboardList.map((clipboardItem) => (
            <Card
              date={moment.unix(clipboardItem.date).format("LLL")}
              text={clipboardItem.text}
              handleClick={handleClick}
              key={clipboardItem.id}
            />
          ))
        )}
      </div>
    </article>
  );
}
