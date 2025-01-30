"use client";

import { useParams } from "next/navigation";
import { Breadcrumbs } from "@/app/ui/shop/breadcrumbs";
import { fetchCoffeeByName } from "@/app/lib/actions";

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
      <div className="flex gap-16">
        <div>
          <h1 className="text-4xl">{product?.name}</h1>
          <div className="bg-gray-700 h-96 w-72"></div>
          <p>{product?.description}</p>
        </div>
        <div>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
