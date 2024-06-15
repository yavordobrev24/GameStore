import { Game } from "../lib/definitions";
import GameCard from "../components/gameCard/gameCard";
import pool from "@/postgres-db/db";
import Link from "next/link";
import { redirect } from "next/navigation";
import styles from "./page.module.css";
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
      <section className="flex max-w-[1000px] py-12 mx-auto">
        <div className="mr-10">
          <p className="text-2xl font-bold">Category</p>
          <div className={styles["categories"]}>
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

        <ul className="flex gap-10 flex-wrap">
          {games.map((value: Game) => (
            <GameCard key={value.id} game={value} />
          ))}
        </ul>
      </section>
    </main>
  );
}
