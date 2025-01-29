import { specialtyCoffees } from "@/app/lib/placeholder-data/coffee-placeholder-data";
import { SpecialtyCoffee } from "@/app/lib/definitions/coffee-definitions";
import { Accessory } from "@/app/lib/definitions/accessories-definitions";

export const fetchAllFilters = (): SpecialtyCoffee[] => {
  return specialtyCoffees.filter((coffee) => coffee.brewMethod === "filter");
};

export const fetchAllEspressos = (): SpecialtyCoffee[] => {
  return specialtyCoffees.filter((coffee) => coffee.brewMethod === "espresso");
};

export const fetchAllAccessories = (): Accessory[] => {
  return [];
};
