"use client";
import { CartItem } from "../lib/definitions";
import { useStore } from "../store";
import CartCard from "./cartCard";

export default function CartList() {
  const storedGames = useStore((store) => store.cart);
  return (
    <>
      {storedGames.length > 0 ? (
        <>
          {storedGames.map((game: CartItem) => (
            <CartCard cartItem={game} key={game.id} />
          ))}
        </>
      ) : (
        <p className="text-center text-gray-500 my-5">
          Your cart is currently empty.
        </p>
      )}
    </>
  );
}
