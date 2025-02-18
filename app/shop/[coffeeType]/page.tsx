import {
  fetchAllCoffees,
  fetchDecafCoffees,
  fetchEspressoCoffees,
  fetchFilterCoffees,
} from "@/app/lib/actions/coffee-actions";
import CoffeeTypePageView from "@/app/ui/shop/coffee-type-page/coffee-type-page-view";
import { Coffee } from "@/app/lib/definitions/coffee-definitions";
import { notFound } from "next/navigation";

export default async function CoffeeListPage({
  params,
}: {
  params: Promise<{ coffeeType: string }>;
}) {
  const { coffeeType } = await params;

  const coffeeTypeToFetch: Record<string, Function> = {
    "all-coffees": fetchAllCoffees,
    "filter-coffees": fetchFilterCoffees,
    "espresso-coffees": fetchEspressoCoffees,
    "decaf-coffees": fetchDecafCoffees,
  };

  const fetchedCoffees: Coffee[] = await coffeeTypeToFetch[coffeeType]();

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
