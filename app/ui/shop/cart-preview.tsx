import { useStore } from "@/app/lib/store/store";

export function CartPreview() {
  const hideCartPreview = useStore((state) => state.hideCartPreview);

  return (
    <div>
      <h2>Cart Preview</h2>
      <button onClick={() => hideCartPreview()}>Close</button>
    </div>
  );
}
