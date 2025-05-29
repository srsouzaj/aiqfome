const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 py-6 px-2 items-center justify-center bg-[var(--secondaryWhite)]">
      <p className="text-[var(--primaryPurple)] text-sm font-bold">
        feito com 💜 em maringá-PR
      </p>
      <span className="flex flex-col text-[var(--primaryPurple)] items-center text-[16px] font-bold justify-center">
        <p>aiqfome.com © 2007-2023 aiqfome LTDA.</p>
        <p>CNPJ: 09.186.786/0001-58</p>
      </span>
    </footer>
  );
};

export default Footer;
