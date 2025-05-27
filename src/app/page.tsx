import CardShoes from "./components/card_shoes";
import InitialBanner from "./components/initial_banner";
import { shoesMocked } from "./services/utils/data_moked";

export default function Home() {
  return (
    <main className="flex flex-col gap-6">
      <InitialBanner />
      <section className="px-4">
        <h2 className="text-[20px] font-extrabold text-[var(--primaryPurple)]">
          abertos
        </h2>
        <div className="flex flex-col gap-4">
        {shoesMocked.map(shoes => (
            <CardShoes key={shoes.id} img_src={shoes.image_url} name={shoes.name} rating={shoes.ranting} fare={shoes.fare} />
        ))}
        </div>
      </section>
    </main>
  );
}
