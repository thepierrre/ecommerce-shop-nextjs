import { Item } from "@/app/lib/definitions/shared";

export interface Cart {
  id: string;
  userId: string;
  discountCodes: string[];
  totalPrice: number;
  updatedAt: string;
  items: Item[];
}
