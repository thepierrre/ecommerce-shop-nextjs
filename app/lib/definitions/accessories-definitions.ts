import { Product } from "@/app/lib/definitions/shared";

type Category =
  | "brewing equipment"
  | "filters"
  | "kettles"
  | "grinders"
  | "scales"
  | "coffee storage"
  | "cleaning tools"
  | "cups and tumblers"
  | "other";

export type Accessory = Product & {
  category: Category;
  price: number;
};
