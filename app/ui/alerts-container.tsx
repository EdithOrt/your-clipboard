"use client";

import { useContext, useState, useEffect } from "react";
import { Alert } from "./alert";
import { ClipboardDataContext } from "@/contexts/clipboardData";

export function AlertsContainer() {
  const { alertList } = useContext(ClipboardDataContext);

  return (
    <div className="absolute right-4 z-20 flex flex-col-reverse items-end gap-2.5 overflow-x-hidden">
      {alertList.map((alertItem) => (
        <Alert
          type={alertItem.type}
          text={alertItem.message}
          key={alertItem.id}
        />
      ))}
    </div>
  );
}
