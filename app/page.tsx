import Image from "next/image";
import { manjari } from "./ui/fonts";
import { TextButton } from "./ui/button";
import { CardsContainer } from "./ui/cards-container";
import { JSXElementConstructor } from "react";

export default function Home(): JSX.Element {
  const handleExample = () => {
    console.log("hi");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className={`m-0 max-w-[30ch] text-sm `}>TEXTO PRUEBA</p>

      <CardsContainer />
    </main>
  );
}
