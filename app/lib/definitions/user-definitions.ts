import { Address } from "@/app/lib/definitions/shared";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  defaultShippingAddress: Address;
}
