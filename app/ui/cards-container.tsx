"use client";

import { Card } from "./card";

export function CardsContainer() {
  const handleExample = () => {
    return console.log("hi");
  };
  return (
    <article className="h-[80vh] rounded-2xl border bg-orange-light p-2">
      <Card text="Card prueba" />
    </article>
  );
}
