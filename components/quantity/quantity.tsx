"use client";

import { Dispatch, SetStateAction } from "react";

export default function Quantity({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="quantity">
      <button
        type="button"
        onClick={() => {
          if (quantity > 1) setQuantity((current: number) => current - 1);
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
          if (quantity < 9999) setQuantity((current: number) => current + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
