import { IconButton } from "./button";

export function Card({ text }: { text: string }) {
  const handleClick = () => {
    return console.log("click to close");
  };
  return (
    <section className="border border-orange">
      <div>
        <p>date</p>

        <IconButton icon="x" type="default" handleClick={handleClick} />
      </div>

      <div>
        <p>{text}</p>
      </div>

      <div>
        <IconButton icon="*" type="default" handleClick={handleClick} />
        <IconButton icon="copy" type="default" handleClick={handleClick} />
      </div>
    </section>
  );
}
