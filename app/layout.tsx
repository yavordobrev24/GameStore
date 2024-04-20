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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen mt-[6rem]">
        <header className="fixed top-0 z-10 bg-secondary w-full px-[9rem] py-[2rem]">
          <nav className="flex justify-between">
            <p className="font-bold text-2xl">
              <Link href="/">GameStore</Link>
            </p>
            <ul className="flex gap-3 text-lg">
              <li>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-2xl"
                />
              </li>
              <li>
                <Link href="/user">
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
        <footer className=" bg-primary text-secondary px-[10rem] p-[3rem] w-full">
          <nav>
            <h2 className="text-lg font-bold">Sitemap</h2>
            <ul>
              <li>Categories</li>
              <li>Products</li>
            </ul>
          </nav>
        </footer>
      </body>
    </html>
  );
}
