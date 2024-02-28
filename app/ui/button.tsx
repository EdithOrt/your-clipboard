export function TextButton({
  text,
  handleClick,
  type,
}: {
  text: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  type: "download" | "default";
}) {
  if (type === "default") {
    return (
      <button
        className="text-base text-white hover:text-orange hover:bg-white font-bold border border-white px-8 py-2 rounded-3xl"
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
