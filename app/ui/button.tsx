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
    return <button onClick={(e) => handleClick(e)}>{text}</button>;
  } else if (type === "download") {
    return <button onClick={handleClick}>{text}</button>;
  }
}

export function IconButton(
  { text }: { text: string },
  { handleClick }: { handleClick: any },
  { type }: { type: "circle" | "default" }
) {
  if (type === "default") {
    return <button onClick={handleClick}>{text}</button>;
  } else if (type === "circle") {
    return <a onClick={handleClick}>{text}</a>;
  }
}
