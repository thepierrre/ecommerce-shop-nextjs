"use client";

import CartArticles from "@/app/ui/shop/cart/cart-articles";
import CartOrderSummary from "@/app/ui/shop/cart/cart-order-summary";
import { useEffect, useState } from "react";
import { Cart } from "@/app/lib/definitions/cart-definitions";

export default function Page() {
  const [cart, setCart] = useState<Cart | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("coffeeshop-cart");
      if (storedCart) {
        try {
          setCart(JSON.parse(storedCart));
        } catch (error) {
          console.error(
            "Error parsing the cart from the local storage: ",
            error,
          );
          setCart(null);
        }
      }
    }
  }, []);

  return cart ? (
    <div className="flex">
      <section id="shopping-cart" className="w-35/50 h-full">
        <CartArticles cart={cart} />
      </section>
      <section id="order-summary" className="w-15/50 h-screen bg-gray-100">
        <CartOrderSummary cart={cart} />
      </section>
    </div>
  ) : (
    <div>
      <h1>Your cart is empty</h1>
    </div>
  );
}
