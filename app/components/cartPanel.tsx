"use client";
import { useState } from "react";
import Quantity from "./quantity";

export default function CartPanel({ game }: any) {
  const [quantity, setQuantity] = useState(1);
  const addToCart = () => {
    localStorage.setItem(
      game.id,
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
