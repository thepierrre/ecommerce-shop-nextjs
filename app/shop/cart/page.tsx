"use client";

import CartArticles from "@/app/ui/shop/cart/cart-articles";
import CartOrderSummary from "@/app/ui/shop/cart/cart-order-summary";

export default function Page() {
  const cart = JSON.parse(localStorage.getItem("coffeeshop-cart") as string);

  return (
    <div className="flex">
      <section id="shopping-cart" className="w-35/50 h-full">
        <CartArticles cart={cart} />
      </section>
      <section id="order-summary" className="w-15/50 h-screen bg-gray-100">
        <CartOrderSummary cart={cart} />
      </section>
    </div>
  );
}
