import { InRestaurant } from "@/app/services/apiServices/Restaurant/Models";
import FormatMoney from "@/app/utils/Formatter/formatMoney";
import Image from "next/image";

interface InDeliveryDetail {
  store: InRestaurant;
}

const DeliveryDetail = ({ store }: InDeliveryDetail) => {
  return (
    <section className="flex px-6 flex-col gap-2">
      <article className="flex gap-2 items-center">
        <span className="flex gap-1 items-center">
          <Image
            src={"/assets/delivery-1.svg"}
            alt="moto-delivery"
            width={24}
            height={24}
          />
          <p className="text-[var(--primaryPurple)] font-bold text-sm">
            {FormatMoney(store.restaurant.delivery_fee)}
          </p>
        </span>
        <p className="text-[var(--tertiary-black)]">•</p>
        <p className="text-xs font-bold text-[var(--tertiary-black)]">
          hoje, {store?.restaurant?.estimated_time}
        </p>
        <p className="text-[var(--tertiary-black)]">•</p>
        <p className="text-xs font-bold text-[var(--tertiary-black)]">5.2km</p>
      </article>
      <article>
        <p className="text-xs font-bold bg-[#F2FAFA] w-fit p-2 text-[var(--secondary-green)]">
          {store.restaurant.free_delivery_above
            ? `entrega grátis acima de ${FormatMoney(
                store.restaurant.free_delivery_above
              )}`
            : FormatMoney(store?.restaurant?.free_delivery_above)}
        </p>
      </article>
      <article className="flex gap-1 items-center">
        <Image src={"/assets/star.svg"} alt="star" width={16} height={16} />
        <p className="text-xs font-bold text-[var(--tertiary-black)]">
          {store?.restaurant?.rating} de 5
        </p>
        <p className="text-[var(--tertiary-black)]">•</p>

        <p className="text-xs font-bold text-[var(--secondary-green)]">
          fecha às {store?.restaurant?.closed_at}
        </p>
      </article>
      <article>
        <p className="text-[var(--tertiary-black)] text-xs font-bold">
          pedido mínimo: {FormatMoney(store?.restaurant?.minimum_order)}
        </p>
      </article>
    </section>
  );
};

export default DeliveryDetail;
