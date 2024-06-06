"use client";
import { CartItem } from "../lib/definitions";
import { useStore } from "../store";
import CartCard from "./cartCard";
import CheckoutButton from "./checkoutButton";

export default function CartList() {
  const storedGames = useStore((store) => store.cart);
  return (
    <>
      {storedGames.length > 0 ? (
        <>
          {storedGames.map((cartItem: CartItem) => (
            <CartCard cartItem={cartItem} />
          ))}
          <CheckoutButton />
        </>
      ) : (
        <p className="text-center text-gray-500 mt-4">
          Your cart is currently empty.
        </p>
      )}
    </>
  );
}
