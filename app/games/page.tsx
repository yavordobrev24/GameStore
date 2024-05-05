import { Game } from "@/types";
import GameCard from "../components/gameCard";
import pool from "@/db/db";
async function getGames() {
  const res = await pool.query("SELECT * FROM games;");
  console.log("Get games", res.rows);

  return res.rows;
}

export default async function Games() {
  const games = await getGames();

  return (
    <main className="flex-1">
      <section className="flex flex-col items-center py-[2rem] main-section">
        <h3 className="text-4xl font-bold">Games</h3>
        <ul className="flex gap-10 mt-10 flex-wrap">
          {games.map((value: Game) => (
            <GameCard key={value.id} game={value} />
          ))}
        </ul>
      </section>
    </main>
  );
}
