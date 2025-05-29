import Counter from "@/app/components/counter";
import FormatMoney from "@/app/utils/Formatter/formatMoney";
import Image from "next/image";

const CartList = () => {
  return (
    <section className="flex flex-col  gap-1 bg-[var(--tertiary-white)]">
      <aside className="bg-[var(--primary-white)] py-4 flex flex-col gap-2 w-full">
        <div className="flex justify-between">
          <h3 className="text-xs font-bold">Ceviche de salmão</h3>
          <p className="text-xs font-bold text-[var(--primary-purple)]">
            {FormatMoney(19.9)}
          </p>
        </div>
        <div className="flex items-center justify-end gap-6">
          <a className="flex items-center gap-1 rounded-sm no-underline text-[var(--secondary-green)] font-semibold hover:text-[var(--primary-green)]">
            <Image
              src={"/assets/pencil.svg"}
              alt="logo"
              width={16}
              height={16}
              className="rounded"
            />
            editar
          </a>
          <Counter />
        </div>
        <ul className="pl-4 flex flex-col gap-2 text-xs text-[var(--tertiary-black)] ">
          <li className="list-disc">
            <b>escolha 3 ingredientes</b>
            <p>shimeji</p>
            <p>cream cheese</p>
            <p>tomate seco</p>
          </li>
          <li className="list-disc">
            <b>vai querer bebida?</b>
            <span className="w-full flex justify-between">
              <p>coca-cola</p>
              <p className="font-bold text-[var(--secondary-green)] ">
                + {FormatMoney(5)}
              </p>
            </span>
          </li>
          <li className="list-disc">
            <b>tamanho</b>
            <p>médio</p>
          </li>
          <li className="list-disc">
            <b>quer o dobro?</b>
            <p>salmão</p>
          </li>
        </ul>
        <div className="p-1.5 bg-[var(--secondary-white)]">
          <p className="font-semibold text-xs text-[var(--secondary-black)]">
            <b>observação:</b> tirar a cebolinha
          </p>
        </div>
      </aside>

      <aside className="bg-[var(--primary-white)] py-4 flex flex-col gap-2 w-full">
        <div className="flex justify-between">
          <h3 className="text-xs font-bold">Ceviche de salmão</h3>
          <p className="text-xs font-bold text-[var(--primary-purple)]">
            {FormatMoney(19.9)}
          </p>
        </div>
        <div className="flex items-center justify-end gap-6">
          <a className="flex items-center gap-1 rounded-sm no-underline text-[var(--secondary-green)] font-semibold hover:text-[var(--primary-green)]">
            <Image
              src={"/assets/pencil.svg"}
              alt="logo"
              width={16}
              height={16}
              className="rounded"
            />
            editar
          </a>
          <Counter />
        </div>
        <ul className="pl-4 text-xs text-[var(--tertiary-black)] ">
          <li className="list-disc">
            <b>escolha 3 ingredientes</b>
            <p>shimeji</p>
            <p>cream cheese</p>
            <p>tomate seco</p>
          </li>
        </ul>
        <div className="p-1.5 bg-[var(--secondary-white)]">
          <p className="font-semibold text-xs text-[var(--secondary-black)]">
            <b>observação:</b> tirar a cebolinha
          </p>
        </div>
      </aside>
    </section>
  );
};

export default CartList;
