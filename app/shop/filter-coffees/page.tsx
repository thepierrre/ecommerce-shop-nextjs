"use client";

import { fetchAllFilters } from "@/app/lib/actions";
import { SpecialtyCoffee } from "@/app/lib/definitions/coffee-definitions";
import Link from "next/link";
import { useStore } from "@/app/lib/store/store";

export default function Page() {
  const fetchedFilterCoffees = fetchAllFilters();
  const showCartPreview = useStore((state) => state.showCartPreview);

  const primaryFlavors = (coffeeId: string) => {
    return fetchedFilterCoffees
      .find((coffee) => coffee.id === coffeeId)
      ?.primaryFlavors.join(", ");
  };

  const filterCoffees = fetchedFilterCoffees.map((coffee: SpecialtyCoffee) => (
    <div key={coffee.id} className="border border-black bg-gray-300 w-68 h-112">
      <Link href={`/shop/filter-coffees/${coffee.name}`}>
        <div className="bg-gray-700 h-3/5"></div>
      </Link>
      <div className="p-2">
        <h2 className="text-xl text-center mb-4">{coffee.name}</h2>
        <p className="text-center">{primaryFlavors(coffee.id)}</p>
        <p className="text-center">{coffee.roastLevel}</p>
        <p className="text-center">From €{coffee.priceFor250g / 100}</p>
      </div>
      <div className="flex justify-center">
        <button onClick={() => showCartPreview()}>Add to cart</button>
      </div>
    </div>
  ));

  return (
    <div className="">
      <h1 className="text-center text-6xl my-8">Filter Coffees</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-8">{filterCoffees}</div>
      </div>
    </div>
  );
}
