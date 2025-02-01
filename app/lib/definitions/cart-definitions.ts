import { Items } from "@/app/lib/definitions/shared";

export type Cart = {
  totalPrice: number;
  items: Items;
};
