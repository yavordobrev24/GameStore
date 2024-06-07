"use client";

import { useStore } from "../store";
import { CartItem } from "../lib/definitions";

export default function CartQuantity({ cartItemId }: { cartItemId: number }) {
  const storedGame = useStore((store) => store.cart).find((item: CartItem) => {
    return item.id == cartItemId;
  });
  const updateCartItem = useStore((store) => store.updateCartItem);
  const quantity = storedGame?.quantity;
  return (
    <div className="quantity">
      <button
        type="button"
        onClick={() => {
          if (quantity && quantity > 1)
            updateCartItem({
              ...storedGame,
              quantity: quantity - 1,
            });
        }}
      >
        -
      </button>
      <input
        type="number"
        min="1"
        max="9998"
        step="1"
        value={quantity}
        onChange={(e) => {
          const newQuantity = Math.min(
            Math.max(1, Number(e.target.value)),
            9998
          );
          if (storedGame)
            updateCartItem({ ...storedGame, quantity: newQuantity });
        }}
      />
      <button
        type="button"
        onClick={() => {
          if (quantity && quantity < 9999)
            updateCartItem({
              ...storedGame,
              quantity: quantity + 1,
            });
        }}
      >
        +
      </button>
    </div>
  );
}
