"use client";
import { useState } from "react";

export default function Quantity() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="quantity">
      <button
        type="button"
        onClick={() => {
          if (quantity > 1) setQuantity((current) => current - 1);
        }}
      >
        -
      </button>
      <input
        type="number"
        min="1"
        max="9998"
        step="1"
        value={quantity}
        onChange={(e) => {
          const newQuantity = Math.min(
            Math.max(1, Number(e.target.value)),
            9998
          );
          setQuantity(newQuantity);
        }}
      />
      <button
        type="button"
        onClick={() => {
          if (quantity < 9999) setQuantity((current) => current + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
