import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GameStore",
  description: "Online store for video games",
};
async function searchGame() {}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen mt-[6rem]">
        <header className="fixed top-0 z-10 bg-secondary w-full px-[10rem] py-[2rem] border-b-[1px] border-gray-300">
          <nav className="flex justify-between">
            <p className="font-bold text-2xl ">
              <Link href="/">
                Game<span className="text-purple-600">Store</span>
              </Link>
            </p>
            <div>
              <input
                type="text"
                className="searchbar"
                placeholder="What is your favorite game?"
              />
              <button>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="mx-2"
                  /*onClick={searchGame}*/
                />
              </button>
            </div>

            <ul className="flex gap-3 text-lg">
              <li>
                <Link href="/user/login">
                  <FontAwesomeIcon icon={faUser} className="text-2xl" />
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <FontAwesomeIcon icon={faCartShopping} className="text-2xl" />
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer className=" bg-primary text-secondary px-[10rem] p-[3rem] w-full border-t-[1px] border-gray-300">
          <nav>
            <h2 className="text-lg font-bold">Sitemap</h2>
            <ul>
              <li>
                <Link href="/categories">Categories</Link>
              </li>
              <li>
                <Link href="/games">Games</Link>
              </li>
            </ul>
          </nav>
        </footer>
      </body>
    </html>
  );
}
