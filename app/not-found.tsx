import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col mx-auto justify-center">
      <p className="text-4xl font-bold mb-1">404 Page Not Found</p>
      <p className="text-xl mb-5">
        The page you were looking for does not exist.
      </p>
      <Link href="/products" className="mx-auto">
        <button className="bg-primary rounded-md text-secondary px-8 py-3 text-xl">
          Continue shopping
        </button>
      </Link>
    </main>
  );
}
