import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

async function getGame(gameId: number) {
  const res = await fetch(`http://localhost:8000/games/${gameId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Game({ params }: Params) {
  const game = await getGame(params.id);

  return (
    <main className="flex-1">
      <h1>Dynamic Page: {game.name}</h1>
    </main>
  );
}
