import { SpecialtyCoffee } from "@/app/lib/definitions/coffee-definitions";
import { GrindSize, grindSizes } from "@/app/lib/definitions/shared";
import { clsx } from "clsx";
import { useState } from "react";
import Form from "next/form";
import { addToCart } from "@/app/lib/actions/cart-actions";

export default function CartPanel({ product }: { product: SpecialtyCoffee }) {
  const [selectedNetWeight, setSelectedNetWeight] = useState<"250g" | "1kg">(
    "250g",
  );
  const [selectedGrindSize, setSelectedGrindSize] = useState<GrindSize>(
    GrindSize.WHOLE_BEANS,
  );
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

  const onNetWeightChange = (value: "250g" | "1kg") => {
    setSelectedQuantity(1);
    setSelectedNetWeight(value);
  };

  const onGrindSizeChange = (value: GrindSize) => {
    setSelectedQuantity(1);
    setSelectedGrindSize(value);
  };

  const onMinusButtonClick = () => {
    if (selectedQuantity <= 1) {
      return;
    }
    setSelectedQuantity((prevState) => prevState - 1);
  };

  const onPlusButtonClick = () => {
    if (selectedQuantity >= 10) {
      return;
    }
    setSelectedQuantity((prevState) => prevState + 1);
  };

  const calculatePriceForUnit = (): number => {
    if (selectedNetWeight === "250g") {
      return product.priceFor250g / 100;
    }
    return product.priceFor1kg / 100;
  };

  const calculatePriceFor1kg = (): number => {
    if (selectedNetWeight === "250g") {
      return (product.priceFor250g * 4) / 100;
    }
    return product.priceFor1kg / 100;
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
            onClick={() => onNetWeightChange("250g")}
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
            onClick={() => onNetWeightChange("1kg")}
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
        <h3 className="text-2xl my-4">Grind size</h3>
        <div className="flex flex-wrap gap-4">
          {grindSizes.map((grindSize) => (
            <button
              onClick={() => onGrindSizeChange(grindSize as GrindSize)}
              key={grindSize}
              className={clsx(
                selectedGrindSize === grindSize
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

      <p className="text-4xl">
        € {(calculatePriceForUnit() * selectedQuantity).toFixed(2)}
      </p>

      <Form action={addToCart} className="flex gap-4">
        <div className="flex gap-4">
          <div>
            <input type="hidden" name="net-weight" value={selectedNetWeight} />
            <input type="hidden" name="quantity" value={selectedQuantity} />
            <input
              type="hidden"
              name="product-code"
              value={product.productCode}
            />
            <input type="hidden" name="grind-size" value={selectedGrindSize} />
            <input type="hidden" name="net-weight" value={selectedNetWeight} />
            <input
              type="hidden"
              name="price-for-250g"
              value={product.priceFor250g}
            />
            <input
              type="hidden"
              name="price-for-1kg"
              value={product.priceFor1kg}
            />
          </div>

          <div>
            <button type="button" onClick={() => onMinusButtonClick()}>
              —
            </button>
            <div className="border border-black w-8 h-8">
              {selectedQuantity}
            </div>
            <button type="button" onClick={() => onPlusButtonClick()}>
              +
            </button>
          </div>

          <div>
            <button type="submit">Add to cart</button>
          </div>
        </div>
      </Form>

      <p>€ {calculatePriceFor1kg().toFixed(2)}/kg</p>
    </div>
  );
}
