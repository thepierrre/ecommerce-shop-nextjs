"use client";

import { useParams } from "next/navigation";
import { Breadcrumbs } from "@/app/ui/shop/breadcrumbs";

export default function Page() {
  const params = useParams<{
    productType: string;
    name: string;
  }>();

  const productName = decodeURI(params.name);

  return (
    <div className="my-8">
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "All Coffees",
            href: "/shop/all-coffees",
          },
          {
            label: "Filter Coffees",
            href: "/shop/filter-coffees",
            active: true,
          },
        ]}
      />
      <h1 className="text-4xl">{productName}</h1>
    </div>
  );
}
