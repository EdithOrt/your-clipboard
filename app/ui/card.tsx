import { useState } from "react";
import { IconButton, TextButton } from "./button";
import { manjari } from "./fonts";
import { SVGComponent } from "../lib/utils";
import clsx from "clsx";

interface CardProps {
  text: string;
  handleClose: React.MouseEventHandler<HTMLButtonElement>;
  date: string;
  handleFavorites: React.MouseEventHandler<HTMLButtonElement>;
  isFavorite: boolean;
  displayConfirmView: boolean;
  handleDelete: React.MouseEventHandler<HTMLButtonElement>;
}

export function Card({
  text,
  handleClose,
  date,
  handleFavorites,
  isFavorite,
  displayConfirmView,
  handleDelete,
}: CardProps) {
  const [isCoppied, setIsCoppied] = useState<boolean>(false);

  const copyText = () => {
    setIsCoppied(!isCoppied);

    setTimeout(() => {
      setIsCoppied(false);
    }, 500);
  };

  return (
    <section
      className={clsx(
        `card text h-44 rounded-2xl border border-orange  px-5 py-3.5 text-xs`,
        {
          "bg-white": !displayConfirmView,
          [manjari.className]: !displayConfirmView,
          "bg-orange font-bold text-white": displayConfirmView,
        },
      )}
    >
      {!displayConfirmView ? (
        <>
          <div className="mb-2 flex justify-between font-bold">
            <p>{date}</p>

            <IconButton
              variant="default"
              type="default"
              handleClick={handleClose}
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
              handleClick={handleFavorites}
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
        </>
      ) : (
        <>
          <p className="text-center text-2xl">Are you sure to delete it?</p>
          <TextButton
            text="Yes"
            handleClick={handleDelete}
            type="default"
            style="primary"
          />

          <TextButton
            text="No"
            handleClick={handleClose}
            type="default"
            style="primary"
          />
        </>
      )}
    </section>
  );
}
