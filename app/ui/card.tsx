import { IconButton } from "./button";

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
          icon="x"
          type="default"
          handleClick={handleClick}
          expresion={undefined}
        />
      </div>

      <div>
        <p>{text}</p>
      </div>

      <div>
        <IconButton
          variant="tooltip"
          icon="*"
          type="default"
          handleClick={handleClick}
          expresion="Favorite"
        />
        <IconButton
          variant="tooltip"
          icon="copy"
          type="default"
          handleClick={handleClick}
          expresion="Copy"
        />
      </div>
    </section>
  );
}
