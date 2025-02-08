import { Cart } from "@/app/lib/definitions/cart-definitions";
import { useState } from "react";
import { isCheaperDeliveryThresholdReached } from "@/app/lib/utils/cart-utils";

export default function CartOrderSummary({ cart }: { cart: Cart }) {
  const [isDeliveryFree, setIsDeliveryFree] = useState<boolean>(
    isCheaperDeliveryThresholdReached(cart.totalPrice),
  );

  const getStandardDeliveryPrice = (): "€2.99" | "free" => {
    if (isDeliveryFree) return "free";
    return "€2.99";
  };

  const getExpressDeliveryPrice = (): "€7.99" | "€4.99" => {
    if (isDeliveryFree) return "€4.99";
    return "€7.99";
  };

  return (
    <div className="w-full px-12 py-4">
      <header id="order-summary">
        <h1 className="text-2xl pb-8 mt-8 mb-4 border-b-2">Order Summary</h1>
      </header>
      <main className="flex flex-col gap-12 mt-8">
        <section
          id="shipping-and-promo-code"
          className="flex flex-col gap-12 pb-8 border-b-2"
        >
          <div className="flex">
            <span className="flex-grow-[3] uppercase">X Items</span>
            <span className="flex-grow-[1] text-right">
              € {cart.totalPrice}
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="shipping-select" className="uppercase">
              Shipping
            </label>
            <select name="shipping" id="shipping-select" className="p-2">
              <option value="standard">
                Standard delivery – {getStandardDeliveryPrice()}
              </option>
              <option value="express">
                Express delivery – {getExpressDeliveryPrice()}
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <div className="flex flex-col gap-4 w-full">
              <label htmlFor="promotion-code" className="uppercase">
                Promo code
              </label>
              <input
                name="promotion-code"
                id="promotion-code"
                className="p-2"
              />
            </div>
            <div>
              <button className="bg-gray-300 py-2 px-4 uppercase">Apply</button>
            </div>
          </div>
        </section>

        <section id="total-cost" className="flex flex-col gap-4">
          <div className="flex">
            <span className="flex-grow-[3] uppercase">Total cost</span>
            <span className="flex-grow-[1] text-right">€ XXX</span>
          </div>
          <div className="flex justify-center">
            <button className="bg-gray-300 py-2 px-4 w-full uppercase">
              Checkout
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
