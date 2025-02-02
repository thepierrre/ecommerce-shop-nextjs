"use client";

import ArticlesTable from "@/app/ui/shop/cart/articles-table";
import SummaryTable from "@/app/ui/shop/cart/summary-table";

export default function Page() {
  const cart = JSON.parse(localStorage.getItem("coffeeshop-cart") as string);

  return (
    <div className="flex gap-24">
      <ArticlesTable cart={cart} />
      <SummaryTable cart={cart} />
    </div>
  );
}
