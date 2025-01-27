export interface Item {
  productId: string;
  price: number;
  quantity: number;
}

export interface Address {
  line1: string;
  line2?: string;
  city: string;
  stateOrProvince: string;
  zipCode: string;
  country: string;
}
