"use client";

import Image from "next/image";
import { IconButton, TextButton } from "./button";
import { Card } from "./card";
import { Tooltip } from "./tooltip";
import trashIcon from "@/public/trash-icon.svg";

export function CardsContainer() {
  const handleExample = () => {
    return console.log("hi");
  };
  return (
    <article className="h-[80vh] rounded-2xl border bg-orange-light p-2">
      <IconButton
        icon={trashIcon}
        handleClick={handleExample}
        type="circle"
        variant="default"
      />

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
