import { fetchAllFilters } from "@/app/lib/actions";
import { SpecialtyCoffee } from "@/app/lib/definitions/coffee-definitions";

export default function Page() {
  const fetchedFilterCoffees = fetchAllFilters();
  const filterCoffees = fetchedFilterCoffees.map((coffee: SpecialtyCoffee) => (
    <div
      key={coffee.id}
      className="border border-black bg-gray-300 w-60 h-80"
    ></div>
  ));

  return (
    <div className="">
      <h1 className="text-center text-6xl">Filter Coffees</h1>
      <div className="flex flex-wrap gap-4 justify-center">{filterCoffees}</div>
    </div>
  );
}
