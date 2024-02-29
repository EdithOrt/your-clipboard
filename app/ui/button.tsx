import clsx from "clsx";
import Image from "next/image";
import { Tooltip } from "./tooltip";

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
        className={clsx("text-base font-bold border px-8 py-2 rounded-3xl", {
          "text-white hover:text-orange hover:bg-white border-white":
            style === "primary",
          "text-orange hover:text-white hover:bg-orange border-orange":
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
  icon,
  handleClick,
  type,
  variant,
  expresion,
}: {
  icon: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  type: "circle" | "default";
  variant: "tooltip" | "default";
  expresion?: string;
}) {
  if (type === "default") {
    return (
      <div>
        <button onClick={handleClick}>
          <Image
            src={icon}
            alt="static name"
            height={50}
            width={50}
            unoptimized
          />
        </button>

        {variant === "tooltip" && (
          <Tooltip text={!expresion ? "" : expresion} />
        )}
      </div>
    );
  } else if (type === "circle") {
    return (
      <button
        onClick={handleClick}
        className="icon-button font-bold flex border rounded-full border-orange bg-white w-[100px] h-[100px] hover:bg-orange hover:text-white justify-center items-center"
      >
        <p>Clear all</p>
        <Image
          src={icon}
          alt="static name"
          height={26}
          width={26}
          unoptimized
        />
      </button>
    );
  }
}
