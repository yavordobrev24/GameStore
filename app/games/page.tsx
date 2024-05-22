import { Game } from "../lib/definitions";
import GameCard from "../components/gameCard";
import pool from "@/postres-db/db";
import Link from "next/link";
import { redirect } from "next/navigation";

async function getGames({
  searchParams,
}: {
  searchParams: { category: string };
}) {
  let res;

  if (searchParams?.category) {
    if (searchParams?.category == "All")
      res = await pool.query("SELECT * FROM games;");
    else {
      res = await pool.query(
        "SELECT * FROM games WHERE $1 = ANY(categories);",
        [searchParams?.category]
      );
    }
  } else {
    res = await pool.query("SELECT * FROM games;");
  }
  return res.rows;
}
const categories = [
  {
    name: "All",
  },
  {
    name: "Action",
  },
  {
    name: "Sport",
  },
  {
    name: "Adventure",
  },
  {
    name: "Fighting",
  },
];
export default async function Games({
  searchParams,
}: {
  searchParams: { category: string };
}) {
  if (!searchParams.category) {
    redirect("http://localhost:3000/games?category=All");
  }
  const games = await getGames({ searchParams });

  return (
    <main className="flex-1">
      <section className="flex main-section pt-10">
        <div className="sidebar mr-10">
          <div className="category">
            <p className="text-2xl font-bold">Category</p>
            <div className="categories">
              <ul>
                {searchParams.category &&
                  categories.map((x: any) => (
                    <li key={x.name}>
                      <Link
                        href={`/games?category=${x.name}`}
                        className={`${
                          searchParams.category == x.name ? "font-bold" : ""
                        }`}
                      >
                        {x.name}
                      </Link>
                    </li>
                  ))}
              </ul>
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
