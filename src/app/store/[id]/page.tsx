import Accordion from "@/app/store/components/accordion";
import HeaderStore from "../components/headerStore";
import DeliveryDetail from "../components/deliveryDetail";

export default function Store() {
  return (
    <main className="flex flex-col gap-6 px-6 py-7 lg:mx-auto lg:max-w-[1200px]">
      <HeaderStore />
      <DeliveryDetail />
      <h1>aa</h1>
      <Accordion />
    </main>
  );
}
