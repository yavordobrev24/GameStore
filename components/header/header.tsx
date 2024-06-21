import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { getSession } from "../../app/lib/session";
import { searchGame } from "../../app/actions";
import LogoutButton from "@/components/logoutButton/logoutButton";
import CartLink from "@/components/cartLink/cartLink"
import styles from "./header.module.css";

export default async function Header() {
  const session = await getSession();

  return (
    <header className="fixed top-0 z-10 bg-secondary w-full px-[2rem] lg:px-[10rem] py-[2rem] border-b-[1px] border-gray-300">
      <nav className={`flex flex-wrap justify-between ${styles["desktop"]}`}>
        <p className="font-bold text-2xl">
          <Link href="/">
            Game<span className="text-purple-600">Store</span>
          </Link>
        </p>
        <form
          action={searchGame}
          className="flex min-w-[100%] md:min-w-[400px] gap-[1rem] md:order-2 order-3 md:mt-0 mt-[1rem]"
        >
          <input
            type="text"
            className={styles["searchbar"]}
            id="query"
            name="query"
            placeholder="Find your favourite game"
          />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>

        <ul className="flex gap-6 items-center md:order-3 order-2">
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
    </header>
  )
}
