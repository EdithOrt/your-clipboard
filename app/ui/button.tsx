import clsx from "clsx";
import Image from "next/image";
import { Tooltip } from "./tooltip";
import { ReactNode } from "react";

export function TextButton({
  text,
  handleClick,
  type,
  style,
}: {
  text: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  type: "download" | "default";
  style: "primary" | "secondary";
}) {
  if (type === "default") {
    return (
      <button
        className={clsx("rounded-3xl border px-8 py-2 text-base font-bold", {
          "border-white text-white hover:bg-white hover:text-orange":
            style === "primary",
          "border-orange text-orange hover:bg-orange hover:text-white":
            style === "secondary",
        })}
        onClick={(e) => handleClick(e)}
      >
        {text}
      </button>
    );
  } else if (type === "download") {
    return <button onClick={handleClick}>{text}</button>;
  }
}

export function IconButton({
  handleClick,
  type,
  variant,
  expression,
  children,
}: {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  type: "circle" | "default";
  variant: "tooltip" | "default";
  expression?: string;
  children: ReactNode;
}) {
  if (type === "default") {
    return (
      <div>
        <button onClick={handleClick} className="button button--icon">
          {children}
        </button>

        {variant === "tooltip" && (
          <Tooltip text={!expression ? "" : expression} state="inactive" />
        )}
      </div>
    );
  } else if (type === "circle") {
    return (
      <button
        onClick={handleClick}
        className="button button--circle flex h-[80px] w-[80px] items-center justify-center rounded-full border border-orange bg-white font-bold hover:bg-orange hover:text-white"
      >
        <p className="button__text">Clear all</p>
        <div className="button__img">{children}</div>
      </button>
    );
  }
}
