import { AccessoryItem, CoffeeItem } from "@/app/lib/definitions/shared";

export type Cart = {
  id: string;
  userId: string;
  discountCodes: string[];
  totalPrice: number;
  updatedAt: string;
  items: (AccessoryItem | CoffeeItem)[];
};
