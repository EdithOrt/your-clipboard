import clsx from "clsx";

export function Tooltip({ text, state }: { text: string; state: boolean }) {
  return (
    <span
      className={clsx(
        "absolute bottom-[-24px]  z-10 rounded-md bg-orange px-2.5 py-0.5 text-white",
        {
          block: state === true,
          hidden: state === false,
        },
      )}
    >
      {text}
    </span>
  );
}
