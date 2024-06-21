import Link from "next/link";
import { Game } from "@/app/lib/definitions";
import styles from "./gameCard.module.css";

export default function GameCard({ game }: { game: Game }) {
  return (
    <li className={styles["card"]}>
      <Link href={`/games/${game.id}`}>
        <div className={styles["card-img"]}>
          <img src={game.imageurl} alt={game.title} />
        </div>
        <div className="text-center">
          <p className="text-xl">{game.title}</p>
          <p>${game.price}</p>
        </div>
      </Link>
    </li>
  );
}
