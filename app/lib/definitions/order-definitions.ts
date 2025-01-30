import {
  Address,
  AccessoryItem,
  CoffeeItem,
} from "@/app/lib/definitions/shared";

type ShippingMethod = "express" | "standard";

export type Order = {
  id: string;
  isPaid: boolean;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  status: string;
  amount: number;
  shippingMethod: ShippingMethod;
  shippingAddress: Address;
  items: (AccessoryItem | CoffeeItem)[];
};
