"use client";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useStore } from "../store";

export default function CartLink() {
  const storedGames = useStore((store) => store.cart);

  return (
    <Link href="/cart" className="text-2xl hover:text-purple-600">
      <span className="text-xl">
        {storedGames.length > 0 ? storedGames.length : 0}
      </span>
      <FontAwesomeIcon icon={faCartShopping} />
    </Link>
  );
}
