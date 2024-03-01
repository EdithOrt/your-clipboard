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
  icon,
  handleClick,
  type,
  variant,
  expression,
}: {
  icon: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  type: "circle" | "default";
  variant: "tooltip" | "default";
  expression?: string;
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
          <Tooltip text={!expression ? "" : expression} />
        )}
      </div>
    );
  } else if (type === "circle") {
    return (
      <button
        onClick={handleClick}
        className="icon-button flex h-[80px] w-[80px] items-center justify-center rounded-full border border-orange bg-white font-bold hover:bg-orange hover:text-white"
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
