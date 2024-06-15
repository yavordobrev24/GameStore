import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { getSession } from "../../lib/session";
import { searchGame } from "../../actions";
import LogoutButton from "../logoutButton";
import CartLink from "../cartLink";
import styles from "./header.module.css";

export default async function Header() {
  const session = await getSession();

  return (
    <header className="fixed top-0 z-10 bg-secondary w-full px-[10rem] py-[2rem] border-b-[1px] border-gray-300">
      <nav className={`flex justify-between ${styles["desktop"]}`}>
        <p className="font-bold text-2xl">
          <Link href="/">
            Game<span className="text-purple-600">Store</span>
          </Link>
        </p>
        <form action={searchGame} className="min-w-[400px]  flex gap-[0.5rem]">
          <input
            type="text"
            className={styles["searchbar"]}
            id="query"
            name="query"
            placeholder="Find your favourite game"
          />
          <button>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="mx-2 hover:text-purple-600"
            />
          </button>
        </form>

        <ul className="flex gap-6 items-center">
          <CartLink />
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
      <nav className={styles["mobile"]}>
        <div className="flex justify-between mb-3">
          <p className="font-bold text-2xl">
            <Link href="/">
              Game<span className="text-purple-600">Store</span>
            </Link>
          </p>
          <ul className="flex gap-6 items-center">
            <CartLink />
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
        </div>

        <form action={searchGame} className="flex min-w-[200px]">
          <input
            type="text"
            className={styles["searchbar"]}
            id="query"
            name="query"
            placeholder="Find your favourite game"
          />
          <button>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="mx-2 hover:text-purple-600"
            />
          </button>
        </form>
      </nav>
    </header>
  );
}
