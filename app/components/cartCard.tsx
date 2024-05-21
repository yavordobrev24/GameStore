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
      <p>{game.value.gameTitle}</p>
      <p>${game.value.gamePrice}</p>
      <Quantity
        gameId={game.id}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <button className="remove-btn" onClick={removeFromCart}>
        X
      </button>
    </div>
  );
}
