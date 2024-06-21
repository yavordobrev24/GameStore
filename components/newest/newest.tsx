import pool from "@/postgres/db";
import GameCard from "../gameCard/gameCard";
import { Game } from "@/app/lib/definitions";

async function getGames() {
  const res = await pool.query("SELECT * FROM games;");
  return res.rows;
}

export default async function Newest() {
  const games = await getGames();

  return (
    <section className="flex flex-col items-center py-[2rem] section">
      <h3 className="text-4xl font">Newest</h3>
      <ul className="flex gap-10 mt-10 flex-wrap">
        {games.slice(-4).map((value: Game) => (
          <GameCard key={value.id} game={value} />
        ))}
      </ul>
    </section>
  );
}
