import Image from "next/image";
import Link from "next/link";
import SearchBar from "./searchbar";

const Navbar = () => {
  return (
    <header className="p-4 bg-[var(--primaryPurple)]">
      <nav className="flex justify-between items-center lg:mx-auto lg:max-w-[1200px]">
      <Link href="/" prefetch>
        <Image
          src={"/assets/logo.svg"}
          alt="logo"
          width={32}
          height={32}
          priority
        />
        </Link>
        <div className="flex flex-col">
          <p className="text-[var(--secondaryWhite)] text-sm">entregando em</p>
          <span className="flex gap-1 cursor-pointer">
            <p className="text-[var(--primaryWhite)] text-base">
              Rua Mandaguari, 198
            </p>
            <Image
              src={"/assets/chevron.svg"}
              alt=""
              width={16}
              height={16}
              priority
            />
          </span>
        </div>
        <Image
          src={"/assets/profile.svg"}
          alt=""
          width={24}
          height={24}
          priority
        />
      </nav>
      <SearchBar/>
    </header>
  );
};

export default Navbar;
