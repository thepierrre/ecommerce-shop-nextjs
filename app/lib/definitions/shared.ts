type Item = {
  productId: string;
  price: number;
  quantity: number;
};

export type AccessoryItem = Item;

type GrindingLevel =
  | "whole beans"
  | "for espresso"
  | "for moka pot"
  | "for chemex"
  | "for V60"
  | "for french press";

export type CoffeeItem = Item & {
  grindingLevel: GrindingLevel;
};

export type Address = {
  line1: string;
  line2?: string;
  city: string;
  stateOrProvince?: string;
  zipCode: string;
  country: string;
};
