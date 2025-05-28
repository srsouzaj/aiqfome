import Cards from "./components/cards";
import InitialBanner from "./components/initial_banner";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 lg:mx-auto lg:max-w-[1200px]">
      <InitialBanner />
     <Cards />
    </main>
  );
}
