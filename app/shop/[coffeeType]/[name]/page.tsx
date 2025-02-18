import { Breadcrumbs } from "@/app/ui/shop/breadcrumbs";
import { fetchCoffeeByName } from "@/app/lib/actions/fetch-actions";
import CartPanel from "@/app/ui/shop/coffee-page/cart-panel";
import ProductPanel from "@/app/ui/shop/coffee-page/product-panel";
import { notFound } from "next/navigation";

export default async function CoffeeItemPage({
  params,
}: {
  params: Promise<{ coffeeType: string; coffeeName: string }>;
}) {
  let { coffeeType, coffeeName } = await params;

  coffeeType = decodeURI(coffeeType);
  const fetchedCoffee = fetchCoffeeByName(coffeeName);

  const coffeeTypeToLabel: Record<string, string> = {
    "filter-coffees": "Filter coffees",
    "espresso-coffees": "Espresso coffees",
    "decaf-coffees": "Decaf coffees",
  };

  if (!fetchedCoffee) {
    notFound();
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
            label: coffeeTypeToLabel[coffeeType],
            href: `/shop/${coffeeType}`,
            active: true,
          },
        ]}
      />
      <h1 className="text-4xl my-8">{fetchedCoffee?.name}</h1>
      <div className="flex gap-16">
        <ProductPanel product={fetchedCoffee} />
        <CartPanel product={fetchedCoffee} />
      </div>
    </div>
  );
}
