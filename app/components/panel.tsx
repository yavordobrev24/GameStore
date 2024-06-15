"use client";
import { useEffect, useState } from "react";
import Quantity from "./quantity";
import { CartItem, Game } from "../lib/definitions";
import { useStore } from "../store";

export default function Panel({ game }: { game: Game }) {
  const storedGame = useStore((store) => store.cart).find(
    (cartItem: CartItem) => cartItem.id == game.id
  );
  const addCartItem = useStore((store) => store.addCartItem);
  const [quantity, setQuantity] = useState<number>(2);
  useEffect(() => {
    if (storedGame) {
      setQuantity(Number(storedGame.quantity));
    } else {
      setQuantity(1);
    }
  }, []);
  return (
    <>
      <Quantity quantity={quantity} setQuantity={setQuantity} />
      <div className="mt-[1rem] text-lg">
        <button
          className="button"
          onClick={() =>
            addCartItem({
              id: game.id,
              title: game.title,
              price: game.price,
              imageurl: game.imageurl,
              quantity,
            })
          }
        >
          Add to cart
        </button>
      </div>
    </>
  );
}
