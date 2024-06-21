import Link from "next/link";
import CartList from "@/components/cartList/cartList";
import CheckoutButton from "@/components/checkoutButton/checkoutButton"
import Newest from "../../components/newest/newest";
import { getSession } from "../lib/session";

export default async function Cart() {
  const session = await getSession();
  return (
    <main className="text-center pt-[3rem]">
      <section>
        <h2 className="text-3xl mb-10">Shopping Cart</h2>
        <CartList />
        {session ? (
          <CheckoutButton />
        ) : (
          <Link href="/user/login" className="button">
            Login to purchase
          </Link>
        )}
      </section>
      <Newest />
    </main>
  );
}
