import { useState } from "react";
import { IconButton } from "./button";
import { manjari } from "./fonts";
import { SVGComponent } from "../lib/utils";

interface CardProps {
  text: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  date: string;
}

export function Card({ text, handleClick, date }: CardProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isCoppied, setIsCoppied] = useState<boolean>(false);

  const updateFavorites = () => {
    setIsFavorite(!isFavorite);
  };

  const copyText = () => {
    setIsCoppied(!isCoppied);

    setTimeout(() => {
      setIsCoppied(false);
    }, 500);
  };

  return (
    <section
      className={`${manjari.className} card text h-44 rounded-2xl border border-orange bg-white px-5 py-3.5 text-xs`}
    >
      <div className="mb-2 flex justify-between font-bold">
        <p>{date}</p>

        <IconButton
          variant="default"
          type="default"
          handleClick={handleClick}
          expression={undefined}
          style="primary"
        >
          <SVGComponent width="12" height="21" icon="close-icon" />
        </IconButton>
      </div>

      <div className="card__text h-[60%] overflow-auto">
        <p className="break-words">{text}</p>
      </div>

      <div className="mr-3 mt-2 flex justify-end gap-2.5">
        <IconButton
          variant="default"
          type="default"
          handleClick={updateFavorites}
          style="primary"
        >
          {isFavorite ? (
            <SVGComponent width="12" height="21" icon="star-fill" />
          ) : (
            <SVGComponent width="12" height="21" icon="star-line" />
          )}
        </IconButton>
        <IconButton
          variant="tooltip"
          type="default"
          handleClick={copyText}
          expression="Coppied"
          tooltipState={isCoppied}
          style="primary"
        >
          <SVGComponent width="12" height="21" icon="copy-icon" />
        </IconButton>
      </div>
    </section>
  );
}
