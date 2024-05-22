import Link from "next/link";

export default async function Footer() {
  return (
    <footer className=" bg-primary text-secondary px-[10rem] p-[3rem] w-full border-t-[1px] border-gray-300">
      <nav className="flex gap-[5rem]">
        <div>
          <h2 className="text-lg font-bold">Sitemap</h2>
          <ul>
            <li>
              <Link href="/games?category=All">Games</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold">Category</h2>
          <ul>
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
