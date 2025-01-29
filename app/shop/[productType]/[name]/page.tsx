"use client";

import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams<{
    productType: string;
    name: string;
  }>();

  const productName = decodeURI(params.name);

  return (
    <div>
      <h1 className="text-center text-5xl my-12">{productName}</h1>
    </div>
  );
}
