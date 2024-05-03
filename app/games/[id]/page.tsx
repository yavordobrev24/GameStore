"use client";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useEffect, useState } from "react";

export default function Game({ params }: Params) {
  const [game, setGame]: any = useState();
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    fetch(`http://localhost:8000/games/${params.id}`)
      .then((data) => data.json())
      .then(setGame);
  }, [quantity]);
  return (
    <main className="flex-1 flex details">
      <section className="details-img">
        <img src={game?.imageUrl} alt={game?.name} />
      </section>
      <section className="details-content">
        <h1 className="name">{game?.name}</h1>
        <p className="desc">{game?.desc}</p>
        <div className="quantity">
          <button
            type="button"
            onClick={() => setQuantity((current) => current - 1)}
          >
            -
          </button>
          <input
            type="number"
            min="1"
            max="99999"
            step="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <button
            type="button"
            onClick={() => setQuantity((current) => current + 1)}
          >
            +
          </button>
        </div>
        <p className="price">${game?.price}</p>
        <div className="action-btns">
          <button className="btn">Add to cart</button>
        </div>
      </section>
    </main>
  );
}
