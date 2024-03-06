"use client";

import { useState } from "react";
import { Alert } from "./alert";

export function AlertsContainer() {
  const [displayAlert, setDisplayAlert] = useState("open");
  const handleExample = () => {
    console.log("close alert");
    setDisplayAlert("closing");

    setTimeout(() => {
      setDisplayAlert("close");
    }, 3500);
  };
  return (
    <div className="absolute right-4 z-20 flex flex-col gap-2.5">
      {(displayAlert === "open" || displayAlert === "closing") && (
        <>
          <Alert
            type="error"
            text="Alert message!"
            handleAlert={handleExample}
            alertState={displayAlert}
          />
          <Alert
            type="error"
            text="Alert message!"
            handleAlert={handleExample}
            alertState={displayAlert}
          />
          <Alert
            type="error"
            text="Alert message!"
            handleAlert={handleExample}
            alertState={displayAlert}
          />
        </>
      )}
    </div>
  );
}
