import { Game } from "../lib/definitions";
import GameCard from "../components/gameCard";
import pool from "@/db/db";

async function getGames(searchParams: any) {
  let res = null;
  if (searchParams?.category) {
    res = await pool.query("SELECT * FROM games WHERE $1 = ANY(categories);", [
      searchParams?.category,
    ]);
  }
  return res.rows;
}

export default async function Games({
  searchParams,
}: {
  searchParams?: { search?: string; page?: string };
}) {
  const games = await getGames(searchParams);
  console.log(searchParams);

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
