import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import pool from "../../../postgres-db/db";
import { Game } from "@/app/lib/definitions";
import Panel from "@/app/components/panel";
import Newest from "@/app/components/newest";
import styles from "./page.module.css";

async function getGame(gameId: number) {
  const res = await pool.query("SELECT * FROM games WHERE id = $1", [gameId]);
  return res.rows[0];
}

export default async function GamePage({ params }: { params: Params }) {
  const game: Game = await getGame(params.id);

  return (
    <>
      <main
        className={`flex flex-col md:flex-row gap-[1rem] w-[600px] mx-auto px-[2rem] mt-[5rem]`}
      >
        <section className={styles["details-img-container"]}>
          <img src={game.imageurl} alt={game.title} />
        </section>
        <section className={styles["details-content"]}>
          <h1 className={styles["details-content-name"]}>{game.title}</h1>
          <p className={styles["details-content-description"]}>
            {game.description}
          </p>
          <p className={styles["details-content-price"]}>${game.price}</p>

          <Panel game={game} />
        </section>
      </main>
      <Newest />
    </>
  );
}
