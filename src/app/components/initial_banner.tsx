import Image from "next/image";

const InitialBanner = () => {
  return (
    <div className="w-full h-[130px] md:h-[260px] lg:h-[400px]">
      <Image
        src="https://i.ibb.co/BVNn9YqX/default.webp"
        alt="Minha imagem"
        width={1200}
        height={400}
        className="object-cover"
      />
    </div>
  );
};

export default InitialBanner;
