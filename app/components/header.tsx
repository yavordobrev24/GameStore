import {
  faArrowRightFromBracket,
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { getSession } from "../lib/session";
import { logout, searchGame } from "../actions";

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
            id="search"
            name="search"
            placeholder="What is your favorite game?"
          />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
          </button>
        </form>

        <ul className="flex gap-3 text-lg">
          {!session && (
            <li>
              <Link href="/user/login">
                <FontAwesomeIcon icon={faUser} className="text-2xl" />
              </Link>
            </li>
          )}
          {session && (
            <>
              <form action={logout}>
                <button type="submit">
                  <FontAwesomeIcon
                    icon={faArrowRightFromBracket}
                    className="text-2xl cursor-pointer"
                  />
                </button>
              </form>
            </>
          )}
          <li>
            <Link href="/cart">
              <FontAwesomeIcon icon={faCartShopping} className="text-2xl" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
