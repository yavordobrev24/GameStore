import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import pool from "../../../postgres-db/db";
import { Game } from "@/app/lib/definitions";
import Panel from "@/app/components/panel";
import Newest from "@/app/components/newest";

async function getGame(gameId: number) {
  const res = await pool.query("SELECT * FROM games WHERE id = $1", [gameId]);
  return res.rows[0];
}

export default async function GamePage({ params }: Params) {
  const game: Game = await getGame(params.id);

  return (
    <>
      <main className="flex-1 flex details">
        <section className="details-img">
          <img src={game.imageurl} alt={game.title} />
        </section>
        <section className="details-content">
          <h1 className="name">{game.title}</h1>
          <p className="desc">{game.description}</p>
          <p className="price">${game.price}</p>

          <Panel game={game} />
        </section>
      </main>
      <Newest />
    </>
  );
}
