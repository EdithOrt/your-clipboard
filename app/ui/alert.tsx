"use client";

import clsx from "clsx";
import { SVGComponent } from "../lib/utils";
import { IconButton } from "./button";
import { useState } from "react";

export function Alert({
  type,
  text,
  handleAlert,
  alertState,
}: {
  type: "error" | "warning" | "success";
  text: string;
  handleAlert: any;
  alertState: string;
}) {
  return (
    <div
      className={clsx(
        "flex gap-3.5 rounded-lg px-3.5 py-2 text-white shadow-xl",
        {
          "bg-red-400": type === "error",
          "bg-green-400": type === "success",
          "bg-yellow-400": type === "warning",
          "alert--animation": alertState === "closing",
        },
      )}
    >
      <p>{text}</p>

      <IconButton
        handleClick={handleAlert}
        type="default"
        variant="default"
        style="secondary"
      >
        <SVGComponent icon="close-icon" width="26" height="26" />
      </IconButton>
    </div>
  );
}
