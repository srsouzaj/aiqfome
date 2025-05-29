import Image from "next/image";
import Link from "next/link";
import FormatMoney from "../utils/Formatter/formatMoney";

interface ICardStores {
  img_src: string;
  name: string;
  fare?: number;
  rating: number;
  isClosed?: boolean;
  id: string;
}

const CardStores = ({
  id,
  img_src,
  name,
  rating,
  isClosed = false,
  fare,
}: ICardStores) => {
  const fareColorClass = !fare
    ? "text-[var(--primaryGreen)]"
    : "text-[var(--secondaryPurple)]";
  const shoesIsClosed = isClosed ? "opacity-50" : "opacity-100";

  return (
    <Link
      href={`store/${id}`}
      className={`flex gap-3 rounded-[8px] bg-[var(--tertiaryWhite)] ${shoesIsClosed}`}
    >
      <Image
        width={72}
        height={72}
        src={img_src}
        alt={`Imagem do tênis ${name}`}
        className="w-[72px] h-[72px] object-cover rounded-tl-lg rounded-bl-lg block"
        priority
      />
      <div className="p-3 w-full flex flex-col gap-1">
        <h2 className="text-[var(--secondaryBlack)] font-bold text-base">
          {name}
        </h2>
        <div className="flex items-center gap-2">
          <span className="flex gap-1 items-center">
            <Image
              width={24}
              height={24}
              src={!fare ? "/assets/delivery.svg" : "/assets/fare.svg"}
              alt=""
              className="w-[24px] h-[24px] block"
            />
            <p className={`${fareColorClass} text-sm font-bold`}>
              {FormatMoney(fare)}
            </p>
          </span>
          <span className="flex gap-1 items-center">
            <Image
              width={24}
              height={24}
              src="/assets/star.svg"
              alt="estrela"
              className="w-[24px] h-[24px] block"
            />
            <p className="text-[var(--tertiaryBlack)] text-sm font-bold">
              {rating}
            </p>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CardStores;
