import { specialtyCoffees } from "@/app/lib/placeholder-data/coffee-placeholder-data";
import { SpecialtyCoffee } from "@/app/lib/definitions/coffee-definitions";
import { Accessory } from "@/app/lib/definitions/accessories-definitions";
import { accessories } from "@/app/lib/placeholder-data/accessories-placeholder-data";

export const fetchAllCoffees = (): SpecialtyCoffee[] => {
  return specialtyCoffees;
};

export const fetchAllFilterCoffees = (): SpecialtyCoffee[] => {
  return specialtyCoffees.filter((coffee) => coffee.brewMethod === "filter");
};

export const fetchAllEspressos = (): SpecialtyCoffee[] => {
  return specialtyCoffees.filter((coffee) => coffee.brewMethod === "espresso");
};

export const fetchCoffeeByName = (coffeeId: string): SpecialtyCoffee | null => {
  const coffee = specialtyCoffees.find((coffee) => coffee.id === coffeeId);
  if (!coffee) {
    return null;
  }
  return coffee;
};

export const fetchAccessoryByName = (accessoryId: string): Accessory | null => {
  const accessory = accessories.find(
    (accessory) => accessory.id === accessoryId,
  );
  if (!accessory) {
    return null;
  }
  return accessory;
};

export const fetchAllAccessories = (): Accessory[] => {
  return [];
};
