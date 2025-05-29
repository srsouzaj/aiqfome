import { InRestaurant } from "@/app/services/apiServices/Restaurant/Models";
import Image from "next/image";

interface IHeaderStore {
  store: InRestaurant;
}

const HeaderCart = ({ store }: IHeaderStore) => {
  return (
    <section className="flex gap-2 items-center">
      <Image
        src={store?.restaurant?.img_url}
        alt="logo"
        width={32}
        height={32}
        className="rounded"
      />
      <span>
        <p className="text-xs text-[var(--tertiary-black)] font-bold">
          seus itens em
        </p>
        <h1 className="text-[var(--quartiaryBlack)] text-base font-extrabold">
          {store?.restaurant?.name}
        </h1>
      </span>
    </section>
  );
};
export default HeaderCart;
