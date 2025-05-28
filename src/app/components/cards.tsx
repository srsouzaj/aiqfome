"use client";
import { useEffect, useState } from "react";
import { shoesMocked } from "../services/utils/data_moked";
import CardShoes from "./card_shoes";
import { inShoes } from "../services/apiServices/Shoes/Models";

const Cards = () => {
  const [shoesAberto, setShoesAberto] = useState<inShoes[]>([]);
  const [shoesFechado, setShoesFechado] = useState<inShoes[]>([]);

  useEffect(() => {
    const now = new Date();
    const minutosAgora = now.getHours() * 60 + now.getMinutes();

    setShoesAberto(
      shoesMocked.filter((shoes) => {
        const [hOpen, mOpen] = shoes.opened_at.split(":").map(Number);
        const [hClose, mClose] = shoes.closed_at.split(":").map(Number);

        const minutosOpen = hOpen * 60 + mOpen;
        const minutosClose = hClose * 60 + mClose;

        return minutosAgora >= minutosOpen && minutosAgora <= minutosClose;
      })
    );

    setShoesFechado(
      shoesMocked.filter((shoes) => {
        const [hOpen, mOpen] = shoes.opened_at.split(":").map(Number);
        const [hClose, mClose] = shoes.closed_at.split(":").map(Number);

        const minutosOpen = hOpen * 60 + mOpen;
        const minutosClose = hClose * 60 + mClose;

        return minutosAgora < minutosOpen || minutosAgora > minutosClose;
      })
    );
  }, []);
  return (
    <section className="px-4">
     <aside>
     <h2 className="text-[20px] font-extrabold mb-4 text-[var(--primaryPurple)]">
        abertos
      </h2>
      <div className="flex flex-col gap-4">
        {shoesAberto.map((shoes) => (
          <CardShoes
            key={shoes.id}
            img_src={shoes.image_url}
            name={shoes.name}
            rating={shoes.ranting}
            fare={shoes.fare}
          />
        ))}
      </div>
     </aside>
     <aside className="mt-6">
     <h2 className="text-[20px] font-extrabold mb-4 text-[var(--primaryPurple)]">
        fechados
      </h2>
      <div className="flex flex-col gap-4">
        {shoesFechado.map((shoes) => (
          <CardShoes
            key={shoes.id}
            img_src={shoes.image_url}
            name={shoes.name}
            rating={shoes.ranting}
            fare={shoes.fare}
          />
        ))}
      </div>
     </aside>
    </section>
  );
};

export default Cards;
