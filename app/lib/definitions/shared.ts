export type Product = {
  id: string;
  name: string;
  productCode: string;
  description: string;
};

export type Items = {
  [productWarehouseCode: string]: number;
};

export enum GrindSize {
  WHOLE_BEANS = "Whole beans",
  ESPRESSO = "Espresso",
  MOKA_POT = "Moka pot",
  CHEMEX = "Chemex",
  V60 = "V60",
  FRENCH_PRESS = "French press",
}

export const grindSizes = [
  "Whole beans",
  "Espresso",
  "Moka pot",
  "Chemex",
  "V60",
  "French press",
] as const;

export type Address = {
  line1: string;
  line2?: string;
  city: string;
  stateOrProvince?: string;
  zipCode: string;
  country: string;
};
