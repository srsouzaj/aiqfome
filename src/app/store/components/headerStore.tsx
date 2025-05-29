import WishList from "@/app/components/wishList";
import { InRestaurant } from "@/app/services/apiServices/Restaurant/Models";
import Image from "next/image";
import Link from "next/link";

interface IHeaderStore {
  store: InRestaurant;
}

const HeaderStore = ({ store }: IHeaderStore) => {
  return (
    <section className="px-6">
      <article className="flex gap-2 items-center">
        <Image
          src={store?.restaurant?.img_url}
          alt="logo"
          width={36}
          height={36}
          className="rounded"
        />
        <h1 className="text-[var(--quartiaryBlack)] text-[20px] font-extrabold">
          {store?.restaurant?.name}
        </h1>
      </article>
      <article className="flex justify-between">
        <aside className="flex mt-3 gap-3">
          <Image src={"/assets/share.svg"} alt="logo" width={24} height={24} />
          <WishList />
        </aside>
        <Link
          href={`about/${store.id}`}
          className="text-[var(--secondaryGreen)] hover:font-medium flex items-center gap-1"
        >
          mais info
          <Image
            src={"/assets/chevron-right.svg"}
            alt="logo"
            width={12}
            height={12}
          />
        </Link>
      </article>
    </section>
  );
};
export default HeaderStore;
