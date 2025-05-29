import { InRestaurant } from "../apiServices/Restaurant/Models";

export const storeUnitMocked: InRestaurant = {
  id: crypto.randomUUID(),
  restaurant: {
    id: crypto.randomUUID(),
    img_url: "https://i.ibb.co/nMCwFmhN/matsuri.webp",
    name: "Matsuri Concept",
    delivery_fee: 4.99,
    estimated_time: "30-40 min",
    distance_km: 5.2,
    free_delivery_above: 35.0,
    rating: 4.5,
    closed_at: "20:00",
    minimum_order: 15.0,
  },
  categories: [
    {
      id: crypto.randomUUID(),
      name: "Niguiris",
      is_discounted: true,
      items: [],
    },
    {
      id: crypto.randomUUID(),
      name: "Ceviches",
      is_discounted: true,
      description:
        "um prato super refrescante de peixe fatiado e marinado com limão",
      items: [],
    },
    {
      id: crypto.randomUUID(),
      name: "Temakis",
      description: "sushi em forma de cone com salmão e cream cheese",
      items: [
        {
          id: crypto.randomUUID(),
          name: "Califórnia",
          ingredients: "Kani, pepino e maçã ou manga",
          original_price: 17.0,
          price: 13.99,
          is_discounted: true,
          tags: ["vegetarian"],
        },
        {
          id: crypto.randomUUID(),
          name: "Filadélfia",
          ingredients: "Arroz, salmão fresco, cream cheese e cebolinha",
          price: 13.99,
        },
        {
          id: crypto.randomUUID(),
          name: "Mix",
          ingredients:
            "Escolha 3 ingredientes: shimeji, alface americana, rúcula, pepino, tomate seco, cream cheese, maionese...",
          price_from: 13.99,
          tags: ["spicy"],
        },
        {
          id: crypto.randomUUID(),
          name: "Salmão picante",
          ingredients: "Alga, arroz, salmão fresco, pimenta e cebolinha",
          price_from: 13.99,
          tags: ["spicy"],
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      name: "Bebidas",
      items: [],
    },
    {
      id: crypto.randomUUID(),
      name: "Sobremesas",
      items: [],
    },
  ],
};
