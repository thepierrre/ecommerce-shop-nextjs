import { specialtyCoffees } from "@/app/lib/placeholder-data/coffee-placeholder-data";
import { SpecialtyCoffee } from "@/app/lib/definitions/coffee-definitions";
import { Accessory } from "@/app/lib/definitions/accessories-definitions";
import { accessories } from "@/app/lib/placeholder-data/accessories-placeholder-data";
import { z } from "zod";
import { Cart } from "@/app/lib/definitions/cart-definitions";
import { grindSizes } from "@/app/lib/definitions/shared";

export const fetchAllCoffees = (): SpecialtyCoffee[] => {
  return specialtyCoffees;
};

export const fetchDecafs = (): SpecialtyCoffee[] => {
  return specialtyCoffees.filter((coffee) => coffee.isDecaf);
};

export const fetchFilterCoffees = (): SpecialtyCoffee[] => {
  return specialtyCoffees.filter(
    (coffee) => coffee.brewMethod === "filter" && !coffee.isDecaf,
  );
};

export const fetchEspressos = (): SpecialtyCoffee[] => {
  return specialtyCoffees.filter(
    (coffee) => coffee.brewMethod === "espresso" && !coffee.isDecaf,
  );
};

export const fetchCoffeeByName = (
  coffeeName: string,
): SpecialtyCoffee | null => {
  const coffee = specialtyCoffees.find((coffee) => coffee.name === coffeeName);
  if (!coffee) {
    return null;
  }
  return coffee;
};

export const fetchAccessoryByName = (accessoryId: string): Accessory | null => {
  const accessory = accessories.find(
    (accessory) => accessory.id === accessoryId,
  );
  if (!accessory) {
    return null;
  }
  return accessory;
};

export const fetchAllAccessories = (): Accessory[] => {
  return [];
};

const CartItemSchema = z.object({
  productCode: z.string(),
  priceForUnit: z.number(),
  quantity: z.number(),
  grindSize: z.enum(grindSizes),
  netWeight: z.enum(["250g", "1kg"]),
});

export const addToCart = (formData: FormData) => {
  const formDataNetWeight = formData.get("net-weight") as string;
  // const formDataGrindSize = formData.get("grind-size") as string;
  // const formDataQuantity = formData.get("quantity") as string;
  const formDataPriceFor250g = formData.get("price-for-250g") as string;
  const formDataPriceFor1kg = formData.get("price-for-1kg") as string;
  // const formDataProductWarehouseCode = formData.get(
  //   "product-warehouse-code",
  // ) as string;

  const priceForUnit =
    formDataNetWeight === "250g" ? +formDataPriceFor250g : +formDataPriceFor1kg;

  const validatedFields = CartItemSchema.safeParse({
    productCode: formData.get("product-code"),
    priceForUnit: priceForUnit,
    quantity: +(formData.get("quantity") as string),
    grindSize: formData.get("grind-size"),
    netWeight: formData.get("net-weight"),
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return;
  }

  const { productCode, netWeight, grindSize, quantity } = validatedFields.data;

  let warehouseGrindSize;

  switch (grindSize) {
    case "Whole beans":
      warehouseGrindSize = "G01";
      break;
    case "Chemex":
      warehouseGrindSize = "G02";
      break;
    case "V60":
      warehouseGrindSize = "G03";
      break;
    case "Espresso":
      warehouseGrindSize = "G04";
      break;
    case "French press":
      warehouseGrindSize = "G05";
      break;
    case "Moka pot":
      warehouseGrindSize = "G06";
      break;
  }

  const productWarehouseCode = [
    productCode,
    netWeight,
    warehouseGrindSize,
  ].join("—");
  console.log(productWarehouseCode);

  const cart = localStorage.getItem("coffeeshop-cart");

  if (!cart) {
    localStorage.setItem(
      "coffeeshop-cart",
      JSON.stringify({
        totalPrice: (priceForUnit / 100) * quantity,
        items: { [productWarehouseCode]: quantity },
      } as Cart),
    );
  } else {
    const parsedCart = JSON.parse(cart) as Cart;

    if (parsedCart.items.hasOwnProperty(productWarehouseCode)) {
      parsedCart.items[productWarehouseCode] += quantity;
    } else {
      parsedCart.items[productWarehouseCode] = quantity;
    }

    parsedCart.totalPrice += (priceForUnit / 100) * quantity;
    localStorage.setItem("coffeeshop-cart", JSON.stringify(parsedCart));
    //console.log(parsedCart.items);
  }
};

// coffeeItems = CoffeeItem[]

// export type CoffeeItem = {
//   [productCode: string]: {
//     netWeight: "250g" | "1kg";
//     grindSize: GrindSize;
//     amount: number;
//   }[];
// };
//
// value={
//   product.productCode +
//       "—" +
//       selectedNetWeight +
//       "—" +
//       selectedGrindSize
// }
