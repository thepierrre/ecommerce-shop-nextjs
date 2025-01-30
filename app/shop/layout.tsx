"use client";

import NavBar from "@/app/ui/shop/navbar";
import { CartPreview } from "@/app/ui/shop/cart-preview";
import { useStore } from "@/app/lib/store/store";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isCartPreviewVisible = useStore((state) => state.isCartPreviewVisible);

  return (
    <div>
      <div className="fixed w-screen top-0 h-20 z-10">
        <NavBar />
      </div>
      {isCartPreviewVisible && (
        <div className="fixed w-112 h-screen right-0 top-0 z-10">
          <CartPreview />
        </div>
      )}

      <div className="relative top-16 mx-12">{children}</div>
    </div>
  );
}
