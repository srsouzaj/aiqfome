"use client";

import {
  Accordion as RadixAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import Image from "next/image";

const Accordion = () => {
  return (
    <RadixAccordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex justify-between w-full">
          Is it accessible?
          <Image src={"/assets/arrow.svg"} alt="logo" width={24} height={24} />
        </AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </RadixAccordion>
  );
};
export default Accordion;
