import { Game } from "../lib/definitions";
import GameCard from "../components/gameCard";
import pool from "../../postgres-db/db";

async function searchGames({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const res = await pool.query("SELECT * FROM games WHERE title ILIKE $1;", [
    "%" + searchParams?.query + "%",
  ]);

  return res.rows;
}

export default async function Search({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const games = await searchGames({ searchParams });

  return (
    <main className="flex-1">
      <section className="flex flex-col items-center py-[2rem] main-section">
        <p className="search-results ">Results {games.length}</p>
        <ul className="flex gap-10 mt-10 flex-wrap">
          {games.map((value: Game) => (
            <GameCard key={value.id} game={value} />
          ))}
        </ul>
      </section>
    </main>
  );
}
