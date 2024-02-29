import { CardsContainer } from "./ui/cards-container";
import { FooterContainer } from "./ui/footer-container";

export default function Home(): JSX.Element {
  return (
    <main className="flex flex-col p-4">
      <CardsContainer />
      <FooterContainer />
    </main>
  );
}
