type Item = {
  productId: string;
  price: number;
  quantity: number;
};

export type AccessoryItem = Item;

export const grindSizes = [
  "Whole beans",
  "For espresso",
  "For moka pot",
  "For chemex",
  "For V60",
  "For French press",
] as const;

export type GrindSize = (typeof grindSizes)[number];

export type CoffeeItem = Item & {
  grindSize: GrindSize;
};

export type Address = {
  line1: string;
  line2?: string;
  city: string;
  stateOrProvince?: string;
  zipCode: string;
  country: string;
};
