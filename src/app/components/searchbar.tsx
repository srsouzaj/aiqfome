import Image from "next/image";

const SearchBar = () => {
  return (
    <form className="bg-white rounded-lg flex items-center mt-4 px-4 py-2 w-full max-w-md shadow-sm lg:mx-auto lg:max-w-[1200px]">
      <Image
      src={"/assets/search.svg"}
      alt="logo"
      width={32}
      height={32}
      className="text-gray-400 text-lg mr-2" />
      <input
        type="text"
        placeholder="busque pela loja ou culinária"
        className="flex-1 bg-transparent outline-none text-gray-600 placeholder-gray-400 text-sm"
      />
    </form>
  );
};

export default SearchBar;