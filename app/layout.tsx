import type { Metadata } from "next";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "./components/header";
import Link from "next/link";

config.autoAddCss = false;

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
        <Header />
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
