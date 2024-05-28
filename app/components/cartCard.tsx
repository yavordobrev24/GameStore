"use client";
import { LocalStorageItem } from "../lib/definitions";
import Quantity from "./quantity";
import { useState } from "react";

export default function CartCard({
  game,
  setLocalStorageData,
}: {
  game: LocalStorageItem;
  setLocalStorageData: any;
}) {
  const [quantity, setQuantity] = useState(game.value.quantity);

  const removeFromCart = () => {
    localStorage.removeItem(game.id);
    setLocalStorageData((previous: LocalStorageItem[]) =>
      previous.filter((x: LocalStorageItem) => x.id !== game.id)
    );
  };

  return (
    <div className="cart-card">
      <img src={game.value.gameImg} alt={game.value.gameTitle} />
      <p className="game-title">{game.value.gameTitle}</p>
      <p className="game-price">${game.value.gamePrice}</p>
      <p className="game-quantity">{game.value.quantity} copies</p>

      <button className="remove-btn" onClick={removeFromCart}>
        X
      </button>
    </div>
  );
}
