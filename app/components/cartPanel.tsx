"use client";
import { useEffect, useState } from "react";
import Quantity from "./quantity";
import { Game } from "../lib/definitions";

export default function CartPanel({ game }: { game: Game }) {
  const [quantity, setQuantity] = useState<number>(1);
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
      <Quantity
        gameId={game.id}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <div className="action-btns">
        <button className="btn" onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </>
  );
}
