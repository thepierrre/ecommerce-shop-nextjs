import { SpecialtyCoffee } from "@/app/lib/definitions/coffee-definitions";
import { grindSizes, GrindSize } from "@/app/lib/definitions/shared";
import { clsx } from "clsx";
import { useState } from "react";

export default function CartPanel({ product }: { product: SpecialtyCoffee }) {
  const [selectedNetWeight, setSelectedNetWeight] = useState<"250g" | "1kg">(
    "250g",
  );
  const [selectedGrindType, setSelectedGrindType] =
    useState<GrindSize>("Whole beans");

  const onSelectedNetWeightChange = (value: "250g" | "1kg") => {
    setSelectedNetWeight(value);
  };

  const onSelectedGrindTypeChange = (value: GrindSize) => {
    setSelectedGrindType(value);
  };

  const displayPriceForUnit = () => {
    if (selectedNetWeight === "250g") {
      return product.priceFor250g / 100;
    }
    return (product.priceFor1kg / 100).toFixed(2);
  };

  const displayPriceFor1kg = () => {
    if (selectedNetWeight === "250g") {
      return (product.priceFor250g * 4) / 100;
    }
    return (product.priceFor1kg / 100).toFixed(2);
  };

  const classNames = {
    optionButton: "bg-gray-200 p-4",
    optionButtonHover: "hover:bg-gray-400",
    optionButtonActive: "bg-gray-700 p-4",
  };

  return (
    <div className="flex flex-col gap-4 border border-black p-4 w-144">
      <div>
        <h3 className="text-2xl my-4">Net weight</h3>
        <div className="flex gap-4">
          <button
            onClick={() => onSelectedNetWeightChange("250g")}
            className={clsx(
              selectedNetWeight === "250g"
                ? classNames.optionButtonActive
                : classNames.optionButton,
              classNames.optionButtonHover,
            )}
          >
            250 g
          </button>
          <button
            onClick={() => onSelectedNetWeightChange("1kg")}
            className={clsx(
              selectedNetWeight === "1kg"
                ? classNames.optionButtonActive
                : classNames.optionButton,
              classNames.optionButtonHover,
            )}
          >
            1 kg
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-2xl my-4">Grind type</h3>
        <div className="flex flex-wrap gap-4">
          {grindSizes.map((grindSize) => (
            <button
              onClick={() => onSelectedGrindTypeChange(grindSize)}
              key={grindSize}
              className={clsx(
                selectedGrindType === grindSize
                  ? classNames.optionButtonActive
                  : classNames.optionButton,
                classNames.optionButtonHover,
              )}
            >
              {grindSize}
            </button>
          ))}
        </div>
      </div>

      <p className="text-4xl">€ {displayPriceForUnit()}</p>

      <div className="flex gap-4">
        <div className="flex gap-4">
          <button>—</button>
          <input defaultValue="1" className="border border-black" />
          <button>+</button>
        </div>
        <button>Add to cart</button>
      </div>

      <p>€ {displayPriceFor1kg()}/kg</p>
    </div>
  );
}
