import { Cart } from "@/app/lib/definitions/cart-definitions";

export default function SummaryTable({ cart }: { cart: Cart }) {
  return (
    <div className="w-2/5">
      <h1 className="text-2xl mt-8 mb-4">Summary</h1>
      <div className="bg-gray-100 p-2 rounded-lg">
        <table className="w-full">
          <tbody className="divide-y">
            <tr className="bg-white">
              <td className="rounded-tl-lg p-2">Subtotal</td>
              <td className="rounded-tr-lg p-2">tbd</td>
            </tr>
            <tr className="bg-white">
              <td className="p-2">Delivery</td>
              <td className="p-2">tbd</td>
            </tr>
            <tr className="bg-white">
              <td className="rounded-bl-lg p-2">Total</td>
              <td className="rounded-br-lg p-2">tbd</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button>Checkout</button>
    </div>
  );
}
