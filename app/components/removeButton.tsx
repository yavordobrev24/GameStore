"use client";

import { CartItem } from "../lib/definitions";
import { useStore } from "../store";

export default function RemoveButton({ cartItem }: { cartItem: CartItem }) {
  const removeCartItem = useStore((store) => store.removeCartItem);
  return (
    <button className="remove-button" onClick={() => removeCartItem(cartItem)}>
      X
    </button>
  );
}
