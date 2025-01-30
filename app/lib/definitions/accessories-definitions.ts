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

export type Accessory = {
  id: string;
  name: string;
  category: Category;
  description: string;
  price: number;
};
