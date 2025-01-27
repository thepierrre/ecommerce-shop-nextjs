import { specialtyCoffees } from "@/app/lib/placeholder-data/coffee-placeholder-data";
import { SpecialtyCoffee } from "@/app/lib/definitions/coffee-definitions";

export const fetchAllFilters = (): SpecialtyCoffee[] => {
  return specialtyCoffees.filter((coffee) => coffee.brewMethod === "filter");
};

export const fetchAllEspressos = (): SpecialtyCoffee[] => {
  return specialtyCoffees.filter((coffee) => coffee.brewMethod === "espresso");
};
