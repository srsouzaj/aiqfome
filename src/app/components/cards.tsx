"use client";
import { useEffect, useState } from "react";
import { storesMocked } from "../services/utils/stores.mocked";
import CardStores from "./card_stores";
import { inStore } from "../services/apiServices/Store/Models";

const Cards = () => {
  const [openedStores, setOpenedStores] = useState<inStore[]>([]);
  const [closedStores, setClosedStores] = useState<inStore[]>([]);

  useEffect(() => {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    setOpenedStores(
      storesMocked.filter((store) => {
        const [openHour, openMinute] = store.opened_at.split(":").map(Number);
        const [closeHour, closeMinute] = store.closed_at.split(":").map(Number);

        const openTimeInMinutes = openHour * 60 + openMinute;
        const closeTimeInMinutes = closeHour * 60 + closeMinute;

        return (
          currentMinutes >= openTimeInMinutes &&
          currentMinutes <= closeTimeInMinutes
        );
      })
    );

    setClosedStores(
      storesMocked.filter((store) => {
        const [openHour, openMinute] = store.opened_at.split(":").map(Number);
        const [closeHour, closeMinute] = store.closed_at.split(":").map(Number);

        const openTimeInMinutes = openHour * 60 + openMinute;
        const closeTimeInMinutes = closeHour * 60 + closeMinute;

        return (
          currentMinutes < openTimeInMinutes ||
          currentMinutes > closeTimeInMinutes
        );
      })
    );
  }, []);
  return (
    <section className="px-4">
      <aside>
        <h2 className="text-[20px] font-extrabold mb-4 text-[var(--secondaryPurple)]">
          abertos
        </h2>
        <div className="flex flex-col gap-4">
          {openedStores.map((store) => (
            <CardStores
              key={store.id}
              id={store.id}
              img_src={store.image_url}
              name={store.name}
              rating={store.ranting}
              fare={store.fare}
            />
          ))}
        </div>
      </aside>
      <aside className="mt-6">
        <h2 className="text-[20px] font-extrabold mb-4 text-[var(--secondaryPurple)]">
          fechados
        </h2>
        <div className="flex flex-col gap-4">
          {closedStores.map((store) => (
            <CardStores
              isClosed={true}
              id={store.id}
              key={store.id}
              img_src={store.image_url}
              name={store.name}
              rating={store.ranting}
              fare={store.fare}
            />
          ))}
        </div>
      </aside>
    </section>
  );
};

export default Cards;
