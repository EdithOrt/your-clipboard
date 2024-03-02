import { IconButton } from "./button";
import { manjari } from "./fonts";
import { SVGComponent } from "../lib/utils";

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
          type="default"
          handleClick={handleClick}
          expression={undefined}
        >
          <SVGComponent width="12" height="21" icon="close-icon" />
        </IconButton>
      </div>

      <div className="card__text h-[60%] overflow-auto">
        <p>{text}</p>
      </div>

      <div className="mr-3 mt-2 flex justify-end gap-2.5">
        <IconButton variant="default" type="default" handleClick={handleClick}>
          <SVGComponent width="12" height="21" icon="star-line" />
        </IconButton>
        <IconButton
          variant="tooltip"
          type="default"
          handleClick={handleClick}
          expression="Coppied"
        >
          <SVGComponent width="12" height="21" icon="copy-icon" />
        </IconButton>
      </div>
    </section>
  );
}
