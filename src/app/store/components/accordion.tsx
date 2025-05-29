"use client";

import { InRestaurant } from "@/app/services/apiServices/Restaurant/Models";
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
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex gap-2 bg-white py-4 px-6 justify-between w-full">
          <div className="flex flex-col">
            <span className="flex gap-1">
              <h2 className="text-base text-left font-bold">Ceviches </h2>
              <Image
                src={"/assets/discount.svg"}
                alt="discount logo"
                width={24}
                height={24}
              />
            </span>

            <p className="text-left text-xs text-[var(--tertiary-black)]">
              um prato super refrescante de peixe fatiado e marinado com limão
            </p>
          </div>

          <Image
            src={"/assets/arrow.svg"}
            alt="chevron-down"
            width={24}
            height={24}
          />
        </AccordionTrigger>
        <AccordionContent className="AccordionContent flex flex-col bg-white w-full">
          <Link href={"#"} className="flex  justify-between py-4 px-8 w-full">
            <div>
              <span className="flex gap-2 items-center">
                <h3 className="text-sm font-semibold">Califórnia</h3>
                <Image
                  src={"/assets/cardapio.svg"}
                  alt="chevron-down"
                  width={16}
                  height={16}
                />
              </span>
              <p className="text-xs text-[var(--tertiary-black)] font-normal">
                Kani, pepino e maçã ou manga
              </p>
            </div>
            <div className="flex items-end flex-col">
              <p className="line-through text-xs text-[var(--tertiary-black)] font-bold">
                R$ 17,00
              </p>
              <span className="flex gap-1">
                <Image
                  src={"/assets/discount.svg"}
                  alt="chevron-down"
                  width={16}
                  height={16}
                />
                <p className="text-sm text-[var(--secondary-green)] font-bold">
                  R$ 17,00
                </p>
              </span>
            </div>
          </Link>
          <Link href={"#"} className="flex justify-between py-4 px-8 w-full">
            <div>
              <span className="flex gap-2 items-center">
                <h3 className="text-sm font-semibold">Califórnia</h3>
              </span>
              <p className="text-xs text-[var(--tertiary-black)] font-normal">
                Kani, pepino e maçã ou manga
              </p>
            </div>
            <div className="flex items-end flex-col">
              <span className="flex gap-1">
                <p className="text-sm text-[var(--primary-purple)] font-bold">
                  R$ 17,00
                </p>
              </span>
            </div>
          </Link>
          <Link href={"#"} className="flex  justify-between py-4 px-8 w-full">
            <div>
              <span className="flex gap-2 items-center">
                <h3 className="text-sm font-semibold">Califórnia</h3>
                <Image
                  src={"/assets/mix.svg"}
                  alt="chevron-down"
                  width={16}
                  height={16}
                />
              </span>
              <p className="text-xs text-[var(--tertiary-black)] font-normal">
                Kani, pepino e maçã ou manga
              </p>
            </div>
            <div className="flex items-end flex-col">
              <p className="text-xs text-[var(--tertiary-black)] font-bold">
                a partir de
              </p>
              <span className="flex gap-1">
                <p className="text-sm text-[var(--primary-purple)] font-bold">
                  R$ 17,00
                </p>
              </span>
            </div>
          </Link>
        </AccordionContent>
      </AccordionItem>
    </RadixAccordion>
  );
};
export default Accordion;
