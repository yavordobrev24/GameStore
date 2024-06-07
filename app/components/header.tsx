import {
  faArrowRightFromBracket,
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { getSession } from "../lib/session";
import { searchGame } from "../actions";
import LogoutButton from "./logoutButton";

export default async function Header() {
  const session = await getSession();

  return (
    <header className="fixed top-0 z-10 bg-secondary w-full px-[10rem] py-[2rem] border-b-[1px] border-gray-300">
      <nav className="flex justify-between">
        <p className="font-bold text-2xl ">
          <Link href="/">
            Game<span className="text-purple-600">Store</span>
          </Link>
        </p>
        <form action={searchGame}>
          <input
            type="text"
            className="searchbar"
            id="query"
            name="query"
            placeholder="What is your favorite game?"
          />
          <button className="search">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="mx-2 hover:text-purple-600"
            />
          </button>
        </form>

        <ul className="flex gap-3 text-lg">
          <Link href="/cart">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-2xl hover:text-purple-600"
            />
          </Link>
          {!session && (
            <li>
              <Link href="/user/login">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-2xl hover:text-purple-600"
                />
              </Link>
            </li>
          )}
          {session && <LogoutButton />}
        </ul>
      </nav>
    </header>
  );
}
