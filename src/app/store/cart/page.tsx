import { storeUnitMocked } from "@/app/services/utils/storeUnit.mocked";
import HeaderCart from "./components/headerCart";
import CartList from "./components/cartList";

export default function Cart() {
  const store = storeUnitMocked;
  return (
    <main className="flex flex-col gap-6 py-7 px-6 h-full w-full lg:mx-auto lg:max-w-[1200px]">
      <HeaderCart store={store} />
      <CartList />
    </main>
  );
}
