import { z } from "zod";
import { Cart } from "@/app/lib/definitions/cart-definitions";
import { grindSizes } from "@/app/lib/definitions/shared";
import { defineGrandSizeCode } from "@/app/lib/util/cart-utils";

const CartItemSchema = z.object({
  productCode: z.string(),
  priceForUnit: z.number(),
  quantity: z.number(),
  grindSize: z.enum(grindSizes),
  netWeight: z.enum(["250g", "1kg"]),
});

export const addToCart = (formData: FormData) => {
  const formDataNetWeight = formData.get("net-weight");
  const formDataPriceFor250g = formData.get("price-for-250g") as string;
  const formDataPriceFor1kg = formData.get("price-for-1kg") as string;

  const priceForUnit: number =
    formDataNetWeight === "250g" ? +formDataPriceFor250g : +formDataPriceFor1kg;

  const validatedFields = CartItemSchema.safeParse({
    productCode: formData.get("product-code"),
    priceForUnit: priceForUnit,
    quantity: +(formData.get("quantity") as string),
    grindSize: formData.get("grind-size"),
    netWeight: formData.get("net-weight"),
  });

  if (!validatedFields.success) {
    console.error(validatedFields.error.flatten().fieldErrors);
    return;
  }

  const { productCode, netWeight, grindSize, quantity } = validatedFields.data;

  const grindSizeCode = defineGrandSizeCode(grindSize);
  const productWarehouseCode = [productCode, netWeight, grindSizeCode].join(
    "—",
  );

  const jsonCart = localStorage.getItem("coffeeshop-cart");
  if (!jsonCart) {
    localStorage.setItem(
      "coffeeshop-cart",
      JSON.stringify({
        totalPrice: (priceForUnit / 100) * quantity,
        items: { [productWarehouseCode]: quantity },
      } as Cart),
    );
    return;
  }

  const parsedCart = JSON.parse(jsonCart) as Cart;
  if (parsedCart.items.hasOwnProperty(productWarehouseCode)) {
    parsedCart.items[productWarehouseCode] += quantity;
  } else {
    parsedCart.items[productWarehouseCode] = quantity;
  }
  parsedCart.totalPrice += (priceForUnit / 100) * quantity;
  localStorage.setItem("coffeeshop-cart", JSON.stringify(parsedCart));
  return;
};
