"use client";

import { TextButton } from "./button";

export function CardsContainer() {
  const handleExample = () => {
    return console.log("hi");
  };
  return (
    <TextButton
      text="Default button"
      type="default"
      handleClick={handleExample}
    />
  );
}
