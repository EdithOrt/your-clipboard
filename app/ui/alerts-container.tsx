"use client";

import { useContext, useState, useEffect } from "react";
import { Alert } from "./alert";
import { ClipboardDataContext } from "@/contexts/clipboardData";

export function AlertsContainer() {
  const [displayAlert, setDisplayAlert] = useState("open");
  const { alertList, deleteAlertItem, getAlertAnimation, currentId } =
    useContext(ClipboardDataContext);

  const handleExample = (id: string) => {
    deleteAlertItem(id);
  };

  return (
    <div className="absolute right-4 z-20 flex flex-col items-end gap-2.5">
      {alertList.map((alertItem) => (
        <Alert
          type={alertItem.type}
          text={alertItem.message}
          handleAlert={() => handleExample(alertItem.id)}
          alertState={alertItem.active}
          key={alertItem.id}
        />
      ))}
    </div>
  );
}
