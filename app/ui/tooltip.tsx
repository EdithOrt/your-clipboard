import clsx from "clsx";

export function Tooltip({
  text,
  state,
}: {
  text: string;
  state: "coppied" | "inactive";
}) {
  return (
    <span
      className={clsx(
        "absolute ml-2 rounded-md bg-orange px-2.5 py-0.5 text-white",
        { block: state === "coppied", hidden: state === "inactive" },
      )}
    >
      {text}
    </span>
  );
}
