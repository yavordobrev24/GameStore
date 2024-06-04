"use client";
import { useEffect, useState } from "react";
import Quantity from "./quantity";
import { CartItem, Game } from "../lib/definitions";
import { useStore } from "../store";

export default function CartPanel({ game }: { game: Game }) {
  const [quantity, setQuantity] = useState<number>(1);
  const storedGames = useStore((store) => store.cart);
  const storedGame = storedGames.find((g: CartItem) => g.id == game.id);
  useEffect(() => {
    const storedGame = localStorage.getItem(String(game.id));
    if (storedGame) {
      const parsedGame = JSON.parse(storedGame);
      setQuantity(Number(parsedGame.quantity));
    } else {
      setQuantity(1);
    }
  }, []);
  const addToCart = () => {
    localStorage.setItem(
      String(game.id),
      JSON.stringify({
        gamePrice: game.price,
        gameImg: game.imageurl,
        gameTitle: game.title,
        quantity,
      })
    );
  };
  return (
    <>
      <Quantity quantity={quantity} setQuantity={setQuantity} />
      <div className="action-btns">
        <button className="btn" onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </>
  );
}
