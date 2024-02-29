import { IconButton } from "./button";
import closeIcon from "@/public/close-icon.svg";
import favoriteInactiveIcon from "@/public/star-line.svg";
import favoriteActiveIcon from "@/public/star-fill.svg";
import copyIcon from "@/public/copy.svg";

export function Card({ text }: { text: string }) {
  const handleClick = () => {
    return console.log("click to close");
  };
  return (
    <section className="border border-orange">
      <div>
        <p>date</p>

        <IconButton
          variant="default"
          icon={closeIcon}
          type="default"
          handleClick={handleClick}
          expression={undefined}
        />
      </div>

      <div>
        <p>{text}</p>
      </div>

      <div>
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
