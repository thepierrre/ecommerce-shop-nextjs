import { SpecialtyCoffee } from "@/app/lib/definitions/coffee-definitions";
import { specialtyCoffees } from "@/app/lib/placeholder-data/coffee-placeholder-data";
import { Accessory } from "@/app/lib/definitions/accessories-definitions";
import { accessories } from "@/app/lib/placeholder-data/accessories-placeholder-data";

export const fetchAllCoffees = (): SpecialtyCoffee[] => {
  return specialtyCoffees;
};

export const fetchDecafs = (): SpecialtyCoffee[] => {
  return specialtyCoffees.filter((coffee) => coffee.isDecaf);
};

export const fetchFilterCoffees = (): SpecialtyCoffee[] => {
  return specialtyCoffees.filter(
    (coffee) => coffee.brewMethod === "filter" && !coffee.isDecaf,
  );
};

export const fetchEspressos = (): SpecialtyCoffee[] => {
  return specialtyCoffees.filter(
    (coffee) => coffee.brewMethod === "espresso" && !coffee.isDecaf,
  );
};

export const fetchCoffeeByName = (
  coffeeName: string,
): SpecialtyCoffee | null => {
  const coffee = specialtyCoffees.find((coffee) => coffee.name === coffeeName);
  if (!coffee) {
    return null;
  }
  return coffee;
};

export const fetchCoffeePrice = (
  name: string,
  netWeight: "250g" | "1kg",
): number | null => {
  const coffee = specialtyCoffees.find((coffee) => coffee.name === name);
  if (!coffee) {
    return null;
  }

  if (netWeight === "250g") {
    return coffee.priceFor250g;
  }
  return coffee.priceFor1kg;
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
