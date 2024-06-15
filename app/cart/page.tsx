import Link from "next/link";
import CartList from "../components/cartList";
import CheckoutButton from "../components/checkoutButton";
import Newest from "../components/newest";
import { getSession } from "../lib/session";

export default async function Cart() {
  const session = await getSession();
  return (
    <main className="flex-1 flex flex-col section text-center">
      <section>
        <h2 className="text-3xl mb-10">Shopping Cart</h2>
        <CartList />
        {session ? (
          <CheckoutButton />
        ) : (
          <Link href="/user/login" className="text-lg italic underline">
            Login to purchase
          </Link>
        )}
      </section>
      <Newest />
    </main>
  );
}
