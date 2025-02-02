import {
  coffeeCodesMappings,
  grindSizeCodeMappings,
} from "@/app/lib/placeholder-data/coffee-placeholder-data";
import { Cart } from "@/app/lib/definitions/cart-definitions";

export default function ArticlesTable({ cart }: { cart: Cart }) {
  type SplitCartItem = [[string, string, string], number];

  const splitCartItems: SplitCartItem[] = [];
  for (const [key, value] of Object.entries(
    cart.items as Record<string, number>,
  )) {
    const keyParts = key.split("—") as [string, string, string];
    splitCartItems.push([keyParts, value]);
    console.log(splitCartItems[0]);
  }

  const displayNameForCode = (nameCode: string): string => {
    return coffeeCodesMappings[nameCode];
  };

  const displayGrindSizeForCode = (grindSizeCode: string): string => {
    return grindSizeCodeMappings[grindSizeCode];
  };

  const formatNetWeight = (netWeight: string): string => {
    if (netWeight === "250g") {
      return "250 g";
    }
    return "1 kg";
  };

  return (
    <div className="w-2/5">
      <h1 className="text-2xl mt-8 mb-4">Your articles</h1>
      <div className="bg-gray-100 p-2 rounded-lg">
        <table className="w-full">
          {/*<thead>*/}
          {/*  <tr>*/}
          {/*    {["Name", "Quantity", "Price"].map((entry) => (*/}
          {/*      <td key={entry} className="pl-2 pr-2 pb-2">*/}
          {/*        {entry}*/}
          {/*      </td>*/}
          {/*    ))}*/}
          {/*  </tr>*/}
          {/*</thead>*/}
          <tbody className="divide-y">
            {splitCartItems.map((item: SplitCartItem) => (
              <tr
                key={item[0].join("—")}
                className="bg-white [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="p-2">
                  <p className="text-lg">{displayNameForCode(item[0][0])}</p>
                  <div className="flex">
                    <p className="text-sm">{formatNetWeight(item[0][1])}</p>
                    <span className="text-sm px-2">|</span>
                    <p className="text-sm">
                      {displayGrindSizeForCode(item[0][2])}
                    </p>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex border border-gray-200 rounded-lg divide-x w-20">
                    <button type="button" className="w-1/3">
                      —
                    </button>
                    <div className="w-1/3 text-center">{item[1]}</div>
                    <button type="button" className="w-1/3">
                      +
                    </button>
                  </div>
                </td>
                <td className="p-2">tbd</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end gap-4 m-2">
        <span>Subtotal:</span>
        <span>tbd</span>
      </div>
    </div>
  );
}
