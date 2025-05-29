interface Restaurant {
  id: string;
  name: string;
  img_url: string;
  delivery_fee: number;
  estimated_time: string;
  distance_km: number;
  free_delivery_above?: number;
  rating: number;
  closed_at: string;
  minimum_order: number;
}
interface MenuItem {
  id: string;
  name: string;
  ingredients?: string;
  price?: number;
  original_price?: number;
  price_from?: number;
  is_discounted?: boolean;
  tags?: Array<"vegetarian" | "sales" | "spicy">;
}

interface MenuCategory {
  id: string;
  name: string;
  is_discounted?: boolean;
  description?: string;
  items: MenuItem[];
}

export interface InRestaurant {
  id: string;
  restaurant: Restaurant;
  categories: MenuCategory[];
}
