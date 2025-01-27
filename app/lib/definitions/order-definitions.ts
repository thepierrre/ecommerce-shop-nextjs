import { Item } from "@/app/lib/definitions/shared";
import { Address } from "node:cluster";

type ShippingMethod = "express" | "standard";

export interface Order {
  id: string;
  isPaid: boolean;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  status: string;
  amount: number;
  shippingMethod: ShippingMethod;
  shippingAddress: Address;
  items: Item[];
}
