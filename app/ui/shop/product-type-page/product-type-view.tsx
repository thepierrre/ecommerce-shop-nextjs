"use client";

import { Coffee } from "@/app/lib/definitions/coffee-definitions";
import Link from "next/link";
import { useStore } from "@/app/lib/store/store";

interface Props {
  fetchedCoffees: Coffee[];
  productType: string;
}

const productTypeToHeadingMap: Record<string, string> = {
  "filter-coffees": "Filter coffees",
  "espresso-coffees": "Espresso coffees",
  "decaf-coffees": "Decaf coffees",
  accessories: "Accessories",
  "all-coffees": "All coffees",
};

export default function ProductTypeView({
  fetchedCoffees,
  productType,
}: Props) {
  const showCartPreview = useStore((state) => state.showCartPreview);

  const primaryFlavors = (coffeeId: string) => {
    return fetchedCoffees
      .find((coffee) => coffee.id === coffeeId)
      ?.primaryFlavors?.join(", ");
  };

  const getProductNameForUrl = (
    coffeeBrewMethod: "espresso" | "filter",
    isDecaf: boolean,
  ): string => {
    if (isDecaf) {
      return "decaf-coffees";
    }

    if (coffeeBrewMethod === "espresso") {
      return "espresso-coffees";
    } else {
      return "filter-coffees";
    }
  };

  const coffees = fetchedCoffees.map((coffee: Coffee) => (
    <div key={coffee.id} className="border border-black bg-gray-300 w-80 h-112">
      <Link
        href={`/shop/${getProductNameForUrl(coffee.brewMethod, coffee.isDecaf)}/${coffee.name}`}
      >
        <div className="bg-gray-700 h-3/5"></div>
      </Link>
      <div className="p-2">
        <h1 className="text-xl text-center mb-4">{coffee.name}</h1>
        <p className="text-center">{primaryFlavors(coffee.id)}</p>
        <p className="text-center">{coffee.roastLevel}</p>
        <p className="text-center">From €{coffee.priceFor250g / 100}</p>
      </div>
      <div className="flex justify-center">
        <button onClick={() => showCartPreview()}>Add to cart</button>
      </div>
    </div>
  ));

  const heading = productTypeToHeadingMap[productType] ?? "";

  return (
    <div className="">
      <h1 className="text-center text-6xl my-8">{heading}</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-8">{coffees}</div>
      </div>
    </div>
  );
}
