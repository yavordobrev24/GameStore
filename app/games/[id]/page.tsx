import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import pool from "@/postgres/db";
import { Game } from "@/app/lib/definitions";
import Panel from "@/components/panel/panel";
import Newest from "@/components/newest/newest";
import styles from "./page.module.css";

async function getGame(gameId: number) {
  const res = await pool.query("SELECT * FROM games WHERE id = $1", [gameId]);
  return res.rows[0];
}

export default async function GamePage({ params }: { params: Params }) {
  const game: Game = await getGame(params.id);

  return (
    <main className="px-[1rem] ">
      <div
        className="flex flex-col items-center md:items-stretch md:flex-row gap-[1rem] md:w-[600px]  mx-auto px-[2rem] mt-[5rem]"
      >
        <section className={styles["details-img-container"]}>
          <img src={game.imageurl} alt={game.title} />
        </section>
        <section className={styles["details-content"]}>
          <h1 className="text-[1.5rem] mb-[0.8rem] font-bold">{game.title}</h1>
          <p className="">
            {game.description}
          </p>
          <p className="font-bold text-[1.5rem] mb-[1rem]">${game.price}</p>

          <Panel game={game} />
        </section>
      </div>
      <Newest />
    </main>
  )
}

