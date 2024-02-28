"use client";

import { TextButton } from "./button";
import { Card } from "./card";

export function CardsContainer() {
  const handleExample = () => {
    return console.log("hi");
  };
  return (
    <article>
      <TextButton
        text="Default button"
        type="default"
        handleClick={handleExample}
      />

      <Card text="Card prueba" />
    </article>
  );
}
