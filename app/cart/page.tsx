"use client";
import { useEffect, useState } from "react";
import CartCard from "../components/cartCard";
import { LocalStorageItem } from "../lib/definitions";

export default function Cart() {
  const [localStorageData, setLocalStorageData] = useState<LocalStorageItem[]>(
    []
  );

  useEffect(() => {
    const keys = Object.keys(localStorage);
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
    </main>
  );
}
