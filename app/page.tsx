import { readClipboard } from "./lib/getClipboard";
import { CardsContainer } from "./ui/cards-container";
import { FooterContainer } from "./ui/footer-container";

export default async function Home() {
  return (
    <main className="flex flex-col p-4">
      <CardsContainer />
      <FooterContainer />
    </main>
  );
}
