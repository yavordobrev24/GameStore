"use client";

import { CartItem } from "@/app/lib/definitions";
import { useStore } from "@/app/store";

export default function RemoveButton({ cartItem }: { cartItem: CartItem }) {
  const removeCartItem = useStore((store) => store.removeCartItem);
  return (
    <button className="button absolute right-[30px]" onClick={() => removeCartItem(cartItem)}>
      X
    </button>
  );
}
