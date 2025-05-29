import Accordion from "@/app/store/components/accordion";
import HeaderStore from "../components/headerStore";
import DeliveryDetail from "../components/deliveryDetail";
import { storeUnitMocked } from "@/app/services/utils/storeUnit.mocked";

export default function Store() {
  const store = storeUnitMocked;
  return (
    <main className="flex flex-col gap-6 py-7 h-full w-full lg:mx-auto lg:max-w-[1200px]">
      <HeaderStore store={store} />
      <DeliveryDetail store={store} />
      <Accordion store={store} />
    </main>
  );
}
