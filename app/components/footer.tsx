import Link from "next/link";

export default async function Footer() {
  return (
    <footer className=" bg-primary text-secondary px-[10rem] p-[3rem] w-full border-t-[1px] border-gray-300">
      <nav>
        <h2 className="text-lg font-bold">Sitemap</h2>
        <ul>
          <li>
            <Link href="/games">Games</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
