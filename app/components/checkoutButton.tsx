"use client";
import { useStore } from "../store";

export default function CheckoutButton() {
  const clearCart = useStore((store) => store.clearCart);
  const storedGames = useStore((store) => store.cart);
  return (
    <>
      {storedGames.length > 0 && (
        <button className="btn mt-10" onClick={clearCart}>
          Checkout
        </button>
      )}
    </>
  );
}
