import clsx from "clsx";

interface TooltipProps {
  text: string;
  state: boolean;
}

export function Tooltip({ text, state }: TooltipProps) {
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
