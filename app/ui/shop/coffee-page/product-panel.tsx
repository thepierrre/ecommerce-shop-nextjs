import { SpecialtyCoffee } from "@/app/lib/definitions/coffee-definitions";

export default function ProductPanel({
  product,
}: {
  product: SpecialtyCoffee;
}) {
  return (
    <div>
      <div className="bg-gray-700 h-96 w-72"></div>
      <p>{product?.description}</p>
    </div>
  );
}
