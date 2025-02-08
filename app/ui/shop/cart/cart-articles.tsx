import {
  coffeeCodesMappings,
  grindSizeCodeMappings,
} from "@/app/lib/placeholder-data/coffee-placeholder-data";
import { Cart } from "@/app/lib/definitions/cart-definitions";
import { fetchCoffeePrice } from "@/app/lib/actions/fetch-actions";

export default function CartArticles({ cart }: { cart: Cart }) {
  type SplitCartItem = [[string, string, string], number];

  console.log("cart: ", cart);

  const splitCartItems: SplitCartItem[] = [];
  for (const [key, value] of Object.entries(
    cart.items as Record<string, number>,
  )) {
    const keyParts = key.split("—") as [string, "250g" | "1kg", string];
    splitCartItems.push([keyParts, value]);
    console.log(splitCartItems[0]);
  }

  const getNameForCode = (nameCode: string): string => {
    return coffeeCodesMappings[nameCode];
  };

  const getGrindSizeForCode = (grindSizeCode: string): string => {
    return grindSizeCodeMappings[grindSizeCode];
  };

  const formatNetWeight = (netWeight: "250g" | "1kg"): "250 g" | "1 kg" => {
    if (netWeight === "250g") {
      return "250 g";
    }
    return "1 kg";
  };

  const getPriceForCode = (
    nameCode: string,
    netWeight: "250g" | "1kg",
  ): number | null => {
    const name = getNameForCode(nameCode);
    const price = fetchCoffeePrice(name, netWeight);
    if (!price) return null;
    return Math.round(price) / 100;
  };

  return (
    <div className="w-full px-12 py-4">
      <h1 className="text-2xl pb-8 mt-8 mb-4 border-b-2 flex">
        <span className="flex-grow-[4]">Shopping Cart</span>
        <span className="flex-grow-[1] text-right">X Items</span>
      </h1>
      <div>
        <table className="w-full">
          <thead>
            <tr className="*:pb-4 uppercase">
              <td>Product details</td>
              <td>Quantity</td>
              <td>Price</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody className="divide-y">
            {splitCartItems.map((item: SplitCartItem) => (
              <tr key={item[0].join("—")} className="*:pb-4">
                <td>
                  <p className="text-lg">{getNameForCode(item[0][0])}</p>
                  <div className="flex">
                    <p className="text-sm">
                      {formatNetWeight(item[0][1] as "250g" | "1kg")}
                    </p>
                    <span className="text-sm px-2">|</span>
                    <p className="text-sm">{getGrindSizeForCode(item[0][2])}</p>
                  </div>
                </td>
                <td>
                  <div className="flex border border-gray-200 divide-x w-20">
                    <button type="button" className="w-1/3">
                      —
                    </button>
                    <div className="w-1/3 text-center">{item[1]}</div>
                    <button type="button" className="w-1/3">
                      +
                    </button>
                  </div>
                </td>
                <td className="p-2">
                  {getPriceForCode(item[0][0], item[0][1] as "250g" | "1kg")}
                </td>
                <td className="p-2">
                  {Math.round(
                    (getPriceForCode(
                      item[0][0],
                      item[0][1] as "250g" | "1kg",
                    ) || 0) *
                      item[1] *
                      100,
                  ) / 100}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
        <div>
          {cart.totalPrice < 50
            ? `€${Math.round((50 - cart.totalPrice) * 100) / 100} remaining for free standard delivery`
            : "Free standard delivery applied"}
        </div>
      }
    </div>
  );
}
