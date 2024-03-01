import { IconButton } from "./button";
import closeIcon from "@/public/close-icon.svg";
import favoriteInactiveIcon from "@/public/star-line.svg";
import favoriteActiveIcon from "@/public/star-fill.svg";
import copyIcon from "@/public/copy.svg";
import { manjari } from "./fonts";

export function Card({ text }: { text: string }) {
  const handleClick = () => {
    return console.log("click to close");
  };
  return (
    <section
      className={`${manjari.className} card text h-44 rounded-2xl border border-orange bg-white px-5 py-3.5 text-xs`}
    >
      <div className="flex justify-between font-bold">
        <p>MM/DD/YY</p>

        <IconButton
          variant="default"
          icon={closeIcon}
          type="default"
          handleClick={handleClick}
          expression={undefined}
        />
      </div>

      <div className="card__text h-[60%] overflow-auto">
        <p>{text}</p>
      </div>

      <div className="mr-3 mt-2 flex justify-end gap-2.5">
        <IconButton
          variant="default"
          icon={favoriteInactiveIcon}
          type="default"
          handleClick={handleClick}
        />
        <IconButton
          variant="tooltip"
          icon={copyIcon}
          type="default"
          handleClick={handleClick}
          expression="Coppied"
        />
      </div>
    </section>
  );
}
