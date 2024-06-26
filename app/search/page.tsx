import { Game } from "../lib/definitions";
import GameCard from "@/components/gameCard/gameCard";
import pool from "@/postgres/db";

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
    <main className="flex-1 px[1rem]">
      <section className="flex flex-col section items-center">
        <p className="rounded-lg text-black px-[0.5rem] py-[1rem]">
          <span className="font-semibold"> {games.length}</span> Results
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-5 ">
          {games.map((game: Game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </ul>
      </section>
    </main>
  );
}
