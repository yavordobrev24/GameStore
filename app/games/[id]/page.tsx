import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import pool from "../../../db/db";
import Quantity from "@/app/components/quantity";
import { Game } from "@/types";
async function getGame(gameId: number) {
  const res = await pool.query("SELECT * FROM games WHERE id = $1", [gameId]);
  return res.rows[0];
}
export default async function GamePage({ params }: Params) {
  const game: Game = await getGame(params.id);

  return (
    <main className="flex-1 flex details">
      <section className="details-img">
        <img src={game.imageurl} alt={game.title} />
      </section>
      <section className="details-content">
        <h1 className="name">{game.title}</h1>
        <p className="desc">{game.description}</p>
        <Quantity />
        <p className="price">${game.price}</p>
        <div className="action-btns">
          <button className="btn">Add to cart</button>
        </div>
      </section>
    </main>
  );
}
