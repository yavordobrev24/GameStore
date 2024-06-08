import Link from "next/link";
import { Game } from "../lib/definitions";

export default function GameCard({ game }: { game: Game }) {
  return (
    <li className="card">
      <Link href={`/games/${game.id}`}>
        <div className="img-holder">
          <img src={game.imageurl} alt={game.title} />
        </div>
        <div className="text-center">
          <p className="text-lg">{game.title}</p>
          <p className="font-bold">${game.price}</p>
        </div>
      </Link>
    </li>
  );
}
