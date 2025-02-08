import { GrindSizeCode } from "@/app/lib/definitions/shared";

export const defineGrandSizeCode = (grindSize: string): GrindSizeCode => {
  switch (grindSize) {
    case "Whole beans":
      return "G01";
    case "Chemex":
      return "G02";
    case "V60":
      return "G03";
    case "Espresso":
      return "G04";
    case "French press":
      return "G05";
    default:
      return "G06";
  }
};

export const isCheaperDeliveryThresholdReached = (
  cartTotalPrice: number,
): boolean => {
  return cartTotalPrice > 50;
};
