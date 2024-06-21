"use client";
import { CartItem } from "@/app/lib/definitions";
import { useStore } from "@/app/store";
import CartCard from "../cartCard/cartCard";

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
        <p className="text-center text-gray-500 mb-[2rem]">
          Your cart is currently empty.
        </p>
      )}
    </>
  );
}
