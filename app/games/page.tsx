import { Game } from "../lib/definitions";
import GameCard from "../components/gameCard";
import pool from "@/postres-db/db";
import Link from "next/link";

async function getGames(searchParams: any) {
  let res;
  if (searchParams?.category) {
    res = await pool.query("SELECT * FROM games WHERE $1 = ANY(categories);", [
      searchParams?.category,
    ]);
  } else {
    res = await pool.query("SELECT * FROM games;");
  }
  return res.rows;
}

export default async function Games({
  searchParams,
}: {
  searchParams?: { category: string };
}) {
  const games = await getGames(searchParams);

  return (
    <main className="flex-1">
      <section className="flex main-section pt-10">
        <div className="sidebar mr-10">
          <div className="category">
            <p className="text-2xl">Category</p>
            <div className="categories">
              <Link href="/games?category=Action">Action</Link>
              <Link href="/games?category=Sport">Sport</Link>
              <Link href="/games?category=Adventure">Adventure</Link>
              <Link href="/games?category=Fighting">Fighting</Link>
            </div>
          </div>
        </div>
        <ul className="flex gap-10 flex-wrap">
          {games.map((value: Game) => (
            <GameCard key={value.id} game={value} />
          ))}
        </ul>
      </section>
    </main>
  );
}
