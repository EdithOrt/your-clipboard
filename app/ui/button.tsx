import clsx from "clsx";

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
        className={clsx("text-base  font-bold border px-8 py-2 rounded-3xl", {
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
}: {
  icon: any;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  type: "circle" | "default";
}) {
  if (type === "default") {
    return (
      <button onClick={handleClick}>
        <img src={icon} />
      </button>
    );
  } else if (type === "circle") {
    return (
      <button onClick={handleClick}>
        <img src={icon} />
      </button>
    );
  }
}
