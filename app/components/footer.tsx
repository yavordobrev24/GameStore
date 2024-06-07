import Link from "next/link";

export default async function Footer() {
  return (
    <footer className="flex justify-center bg-primary text-secondary px-[10rem] p-[3rem] w-full border-t-[1px] border-gray-300 content-center">
      <nav className="flex gap-[5rem]">
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-bold text-center">Sitemap</h2>
          <ul className="flex gap-3">
            <li>
              <Link href="/games?category=All">Games</Link>
            </li>
            <li>
              <Link href="/games?category=Action">Action</Link>
            </li>
            <li>
              <Link href="/games?category=Sport">Sport</Link>
            </li>
            <li>
              <Link href="/games?category=Adventure">Adventure</Link>
            </li>
            <li>
              <Link href="/games?category=Fighting">Fighting</Link>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
}
