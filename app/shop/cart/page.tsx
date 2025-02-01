"use client";

export default function Page() {
  const cart = JSON.parse(localStorage.getItem("coffeeshop-cart") as string);
  console.log(cart);

  type CartItem = [[string, string, string], number];

  const splitCartItems: CartItem[] = [];
  for (const [prodCode, quantity] of Object.entries(
    cart.items as Record<string, number>,
  )) {
    const keyParts = prodCode.split("—") as [string, string, string];
    splitCartItems.push([keyParts, quantity]);
    console.log(splitCartItems[0]);
  }

  return (
    <div className="table-auto">
      <h1 className="text-center text-4xl my-8">Your articles</h1>
      <table>
        <thead>
          <tr>
            <td>Product</td>
            <td>Quantity</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {splitCartItems.map((item: CartItem) => (
            <tr key={item[0].join("—")}>
              <td>{item[0][0]}</td>
              <td>{item[1]}</td>
              <td>price soon</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
