import Image from "next/image"

const InitialBanner = () => {
    return (
        <div className="w-full h-[130px]">
        <Image
          src="https://i.ibb.co/BVNn9YqX/default.webp"
          alt="Minha imagem"
          width={1200}
          height={1200}
          className="object-cover"
        />
      </div>
    )
}

export default InitialBanner;