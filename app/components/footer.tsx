import Link from "next/link";

export default async function Footer() {
  return (
    <footer className="flex justify-center bg-primary text-secondary py-[2rem] w-full border-t-[1px] border-gray-300 content-center">
      <nav className="flex gap-[5rem]">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-bold text-center">Sitemap</h2>
          <ul className="flex gap-3">
            <li>
              <Link href="/games?category=All" className="hover:underline">
                Games
              </Link>
            </li>
            <li>
              <Link href="/games?category=Action" className="hover:underline">
                Action
              </Link>
            </li>
            <li>
              <Link href="/games?category=Sport" className="hover:underline">
                Sport
              </Link>
            </li>
            <li>
              <Link
                href="/games?category=Adventure"
                className="hover:underline"
              >
                Adventure
              </Link>
            </li>
            <li>
              <Link href="/games?category=Fighting" className="hover:underline">
                Fighting
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
}
