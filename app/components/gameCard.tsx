import Link from "next/link";

export default function GameCard({ game }: any) {
  return (
    <li className="card">
      <Link href={`/games/${game.id}`}>
        <div className="img-holder">
          <img src={game.imageurl} alt={game.title} />
        </div>
        <div className="text-center">
          <p>{game.title}</p>
          <p className="font-bold">${game.price}</p>
        </div>
      </Link>
    </li>
  );
}
