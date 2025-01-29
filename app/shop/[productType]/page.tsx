"use client";

import {
  fetchAllCoffees,
  fetchAllEspressos,
  fetchAllFilterCoffees,
} from "@/app/lib/actions";
import { useParams } from "next/navigation";
import { SpecialtyCoffee } from "@/app/lib/definitions/coffee-definitions";
import Link from "next/link";
import { useStore } from "@/app/lib/store/store";

export default function Page() {
  const { productType } = useParams<{ productType: string }>();
  let fetchedCoffees: SpecialtyCoffee[] = [];

  switch (productType) {
    case "all-coffees":
      fetchedCoffees = fetchAllCoffees();
      break;
    case "filter-coffees":
      fetchedCoffees = fetchAllFilterCoffees();
      break;
    case "espresso-coffees":
      fetchedCoffees = fetchAllEspressos();
      break;
  }

  const showCartPreview = useStore((state) => state.showCartPreview);

  const primaryFlavors = (coffeeId: string) => {
    return fetchedCoffees
      .find((coffee) => coffee.id === coffeeId)
      ?.primaryFlavors.join(", ");
  };

  const coffees = fetchedCoffees.map((coffee: SpecialtyCoffee) => (
    <div key={coffee.id} className="border border-black bg-gray-300 w-80 h-112">
      <Link href={`/shop/${productType}/${coffee.name}`}>
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

  const heading =
    productType === "filter-coffees"
      ? "Filter Coffees"
      : productType === "espresso-coffees"
        ? "Espresso Coffees"
        : productType === "accessories"
          ? "Accessories"
          : productType === "all-coffees"
            ? "All Coffees"
            : "";

  return (
    <div className="">
      <h1 className="text-center text-6xl my-8">{heading}</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-8">{coffees}</div>
      </div>
    </div>
  );
}
