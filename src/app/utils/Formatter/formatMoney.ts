const FormatMoney = (value?: number) => {
  return !value
    ? "grátis"
    : value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
};

export default FormatMoney;
