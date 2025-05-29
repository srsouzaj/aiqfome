"use client";

import { InRestaurant } from "@/app/services/apiServices/Restaurant/Models";
import FormatMoney from "@/app/utils/Formatter/formatMoney";
import {
  Accordion as RadixAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import Image from "next/image";
import Link from "next/link";

interface IAccordion {
  store: InRestaurant;
}

const Accordion = ({ store }: IAccordion) => {
  return (
    <RadixAccordion
      type="single"
      collapsible
      className="w-full flex flex-col gap-2 bg-[var(--tertiary-white)]"
    >
      {store?.categories?.map((category, index) => (
        <AccordionItem key={category.id} value={`item-${index + 1}`}>
          <AccordionTrigger className="flex gap-2 min-h-[48px] max-h-[84px] items-center bg-white py-4 px-6 justify-between w-full">
            <div className="flex flex-col">
              <span className="flex gap-1">
                <h2 className="text-base text-left font-bold">
                  {category.name}
                </h2>

                <Image
                  src={"/assets/discount.svg"}
                  alt="discount logo"
                  width={24}
                  height={24}
                />
              </span>

              {category.description && (
                <p className="text-left text-xs text-[var(--tertiary-black)]">
                  {category.description}
                </p>
              )}
            </div>
            <Image
              src={"/assets/arrow.svg"}
              alt="chevron-down"
              className={`${
                !!category?.items?.length ? `opacity-100` : `opacity-50`
              } `}
              width={24}
              height={24}
            />
          </AccordionTrigger>
          {category?.items?.map((content) => (
            <AccordionContent
              key={content.id}
              className="AccordionContent flex flex-col bg-white w-full"
            >
              <Link
                href={`item/${content.id}`}
                className="flex justify-between py-4 px-8 w-full"
              >
                <div>
                  <span className="flex gap-2 items-center">
                    <h3 className="text-sm font-semibold">{content.name}</h3>
                    {!!content.tags && (
                      <Image
                        src={`/assets/${content.tags[0]}.svg`}
                        alt="chevron-down"
                        width={16}
                        height={16}
                      />
                    )}
                  </span>
                  {content.ingredients && (
                    <p className="text-xs text-[var(--tertiary-black)] font-normal">
                      {content.ingredients}
                    </p>
                  )}
                </div>
                {content?.original_price && content?.price ? (
                  <div className="flex items-end flex-col">
                    <p className="line-through text-xs text-[var(--tertiary-black)] font-bold">
                      {FormatMoney(content.original_price)}
                    </p>
                    <span className="flex gap-1">
                      <Image
                        src={"/assets/discount.svg"}
                        alt="chevron-down"
                        width={16}
                        height={16}
                      />
                      <p className="text-sm text-[var(--secondary-green)] font-bold">
                        R$ {FormatMoney(content.price)}
                      </p>
                    </span>
                  </div>
                ) : !content?.price && content?.price_from ? (
                  <div className="flex items-end flex-col">
                    <p className="text-xs text-[var(--tertiary-black)] font-bold">
                      a partir de
                    </p>
                    <span className="flex gap-1">
                      <p className="text-sm text-[var(--primary-purple)] font-bold">
                        {FormatMoney(content.price_from)}
                      </p>
                    </span>
                  </div>
                ) : content?.price ? (
                  <div className="flex items-end flex-col">
                    <span className="flex gap-1">
                      <p className="text-sm text-[var(--primary-purple)] font-bold">
                        {FormatMoney(content.price)}
                      </p>
                    </span>
                  </div>
                ) : null}
              </Link>
            </AccordionContent>
          ))}
        </AccordionItem>
      ))}
    </RadixAccordion>
  );
};
export default Accordion;
