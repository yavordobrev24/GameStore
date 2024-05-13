"use client";
import { useEffect, useState } from "react";
import Quantity from "../components/quantity";
import Link from "next/link";

interface LocalStorageItem {
  id: string;
  value: {
    gamePrice: number;
    gameImg: string;
    gameTitle: string;
    quantity: number;
  };
}

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
        <Link
          href={`/games/${parseInt(game.id)}`}
          key={game.id}
          className="cart-card"
        >
          <img src={game.value.gameImg} alt={game.value.gameTitle} />
          <p>{game.value.gameTitle}</p>
          <p>${game.value.gamePrice}</p>
        </Link>
      ))}
    </main>
  );
}
