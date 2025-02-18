import { fetchAllCoffees } from "@/app/lib/actions/fetch-actions";
import {
  fetchAllCoffees,
  fetchDecafCoffees,
  fetchEspressoCoffees,
  fetchFilterCoffees,
} from "@/app/lib/data";
import CoffeeTypePageView from "@/app/ui/shop/coffee-type-page/coffee-type-page-view";
import { Coffee } from "@/app/lib/definitions/coffee-definitions";
import { notFound } from "next/navigation";

export default async function CoffeeListPage({
  params,
}: {
  params: Promise<{ coffeeType: string }>;
}) {
  const { coffeeType } = await params;

  const coffeeTypeToFetch: Record<string, Coffee[]> = {
    "all-coffees": await fetchAllCoffees(),
    "filter-coffees": await fetchFilterCoffees(),
    "espresso-coffees": await fetchEspressoCoffees(),
    "decaf-coffees": await fetchDecafCoffees(),
  };

  const fetchedCoffees: Coffee[] = coffeeTypeToFetch[coffeeType];

  if (!fetchedCoffees) {
    notFound();
  }

  return (
    <CoffeeTypePageView
      fetchedCoffees={fetchedCoffees}
      coffeeType={coffeeType}
    />
  );
}
