import { readClipboard } from "./lib/getClipboard";
import { AlertsContainer } from "./ui/alerts-container";
import { CardsContainer } from "./ui/cards-container";
import { FooterContainer } from "./ui/footer-container";

export default async function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden p-4">
      <AlertsContainer />
      <CardsContainer />
      <FooterContainer />
    </main>
  );
}
