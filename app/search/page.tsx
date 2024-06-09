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
      <section className="flex flex-col py-[2rem] main-section items-center">
        <p className="search-results ">Results for search: {games.length}</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-5 ">
          {games.map((game: Game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </ul>
      </section>
    </main>
  );
}
