import { fetchAllCoffees } from "@/app/lib/actions/fetch-actions";
import {
  fetchDecafCoffees,
  fetchEspressoCoffees,
  fetchFilterCoffees,
} from "@/app/lib/data";
import ProductTypeView from "@/app/ui/shop/product-type-page/product-type-view";
import { Coffee } from "@/app/lib/definitions/coffee-definitions";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ productType: string }>;
}) {
  const { productType } = await params;

  async function fetchCoffees() {
    switch (productType) {
      case "all-coffees":
        return fetchAllCoffees();
      case "filter-coffees":
        return await fetchFilterCoffees();
      case "espresso-coffees":
        return await fetchEspressoCoffees();
      case "decaf-coffees":
        return await fetchDecafCoffees();
      default:
        return [] as Coffee[];
    }
  }

  const fetchedCoffees = await fetchCoffees();

  if (!fetchedCoffees) {
    notFound();
  }

  return (
    <ProductTypeView
      fetchedCoffees={fetchedCoffees}
      productType={productType}
    />
  );
}
