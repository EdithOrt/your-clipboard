"use client";

import { TextButton } from "./button";
import { Card } from "./card";
import { Tooltip } from "./tooltip";

export function CardsContainer() {
  const handleExample = () => {
    return console.log("hi");
  };
  return (
    <article className="border rounded-2xl h-[80vh] bg-orange-light p-2">
      <TextButton
        text="Default button"
        type="default"
        handleClick={handleExample}
        style="secondary"
      />

      <Card text="Card prueba" />
      <Tooltip text="Tooltip" />
    </article>
  );
}
