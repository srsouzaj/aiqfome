import Image from "next/image";
import Star from "/assets/star.svg";
import Delivery from "/assets/delivery-1.svg";

const DeliveryDetail = () => {
  return (
    <section className="flex flex-col gap-2">
      <article className="flex gap-2 items-center">
        <span className="flex gap-1 items-center">
          <Image src={Delivery} alt="moto-delivery" width={24} height={24} />
          <p className="text-[var(--primaryPurple)] font-bold text-sm">
            R$ 4.99
          </p>
        </span>
        <p className="text-[var(--tertiary-black)]">•</p>
        <span className="flex items-center text-xs font-bold text-[var(--tertiary-black)]">
          <p>hoje,</p> <p>30-40 min</p>
        </span>
        <p className="text-[var(--tertiary-black)]">•</p>
        <p className="text-xs font-bold text-[var(--tertiary-black)]">5.2km</p>
      </article>
      <article>
        <p className="text-xs font-bold bg-[#F2FAFA] w-fit p-2 text-[var(--secondary-green)]">
          entrega grátis acima de R$ 35,00
        </p>
      </article>
      <article className="flex gap-1 items-center">
        <Image src={Star} alt="star" width={16} height={16} />
        <p className="text-xs font-bold text-[var(--tertiary-black)]">
          4.5 de 5
        </p>
        <p className="text-[var(--tertiary-black)]">•</p>

        <p className="text-xs font-bold text-[var(--secondary-green)]">
          fecha às 20:00
        </p>
      </article>
      <article>
        <p className="text-[var(--tertiary-black)] text-xs font-bold">
          pedido mínimo: R$ 15,00
        </p>
      </article>
    </section>
  );
};

export default DeliveryDetail;
