import clsx from "clsx";
import { Tooltip } from "./tooltip";
import { ReactNode } from "react";

interface TextButtonProps {
  text: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  style: "primary" | "secondary";
}

interface IconButtonProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  type: "circle" | "default";
  variant: "tooltip" | "default";
  expression?: string;
  children: ReactNode;
  tooltipState?: boolean;
  hoverText?: string;
  style: "primary" | "secondary";
}

export function TextButton({ text, handleClick, style }: TextButtonProps) {
  return (
    <button
      className={clsx("rounded-3xl border px-8 py-2 text-base font-bold", {
        "border-white text-white hover:bg-white hover:text-orange":
          style === "primary",
        "border-orange text-orange hover:bg-orange hover:text-white":
          style === "secondary",
      })}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export function IconButton({
  handleClick,
  type,
  variant,
  expression,
  children,
  tooltipState,
  hoverText,
  style,
}: IconButtonProps) {
  if (type === "default") {
    return (
      <div
        className={clsx("flex", {
          "relative ": variant === "tooltip",
        })}
      >
        <button
          onClick={handleClick}
          className={clsx("button button--icon", {
            "button--iconSecondary": style === "secondary",
            "button--iconPrimary": style === "secondary",
          })}
        >
          {children}
        </button>

        {variant === "tooltip" && (
          <Tooltip
            text={!expression ? "" : expression}
            state={!tooltipState ? false : true}
          />
        )}
      </div>
    );
  } else if (type === "circle") {
    return (
      <button
        onClick={handleClick}
        className="button button--circle flex h-[80px] w-[80px] items-center justify-center rounded-full border border-orange bg-white font-bold lg:hover:bg-orange lg:hover:text-white"
      >
        <div className="hidden lg:block">
          <p className="button__text">{!hoverText ? "" : hoverText}</p>
        </div>

        <div className="button__img">{children}</div>
      </button>
    );
  }
}
