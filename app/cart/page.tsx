"use client";
import { useEffect, useState } from "react";
import CartCard from "../components/cartCard";
import { LocalStorageItem } from "../lib/definitions";

export default function Cart() {
  const [localStorageData, setLocalStorageData] = useState<LocalStorageItem[]>(
    []
  );

  function checkoutCart() {
    localStorage.clear();
    setLocalStorageData([]);
    alert("Thank you for shopping with us!");
  }

  useEffect(() => {
    console.log(localStorageData);

    const keys = Object.keys(localStorage);
    console.log(keys);

    const parsedData = keys.reduce((acc: LocalStorageItem[], id) => {
      if (!isNaN(parseInt(id))) {
        acc.push({ id, value: JSON.parse(localStorage.getItem(id) || "") });
      }
      return acc;
    }, []);
    setLocalStorageData(parsedData);
  }, []);

  return (
    <main className="flex-1 flex flex-col main-section">
      <h2 className="text-3xl">Shopping Cart</h2>
      {localStorageData.map((game) => (
        <CartCard
          game={game}
          key={game.id}
          setLocalStorageData={setLocalStorageData}
        />
      ))}
      {localStorageData.length > 0 && (
        <button className="btn mt-10" onClick={checkoutCart}>
          Checkout
        </button>
      )}
    </main>
  );
}
