"use client";

import { useParams } from "next/navigation";
import { Breadcrumbs } from "@/app/ui/shop/breadcrumbs";
import { fetchCoffeeByName } from "@/app/lib/actions";
import CartPanel from "@/app/ui/shop/coffee-page/cart-panel";
import ProductPanel from "@/app/ui/shop/coffee-page/product-panel";

export default function Page() {
  const params = useParams<{
    productType: string;
    name: string;
  }>();

  const productName = decodeURI(params.name);
  const product = fetchCoffeeByName(productName);

  console.log("product: ", product);

  const label =
    params.productType === "filter-coffees"
      ? "Filter Coffees"
      : params.productType === "espresso-coffees"
        ? "Espresso Coffees"
        : params.productType === "decaf-coffees"
          ? "Decaf Coffees"
          : "";

  if (!product) {
    return null;
  }

  return (
    <div className="my-8">
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "All Coffees",
            href: "/shop/all-coffees",
          },
          {
            label: label,
            href: `/shop/${params.productType}`,
            active: true,
          },
        ]}
      />
      <h1 className="text-4xl my-8">{product?.name}</h1>
      <div className="flex gap-16">
        <ProductPanel product={product} />
        <CartPanel product={product} />
      </div>
    </div>
  );
}
