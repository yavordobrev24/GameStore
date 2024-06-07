import CartList from "../components/cartList";
import CheckoutButton from "../components/checkoutButton";
import Newest from "../components/newest";
import { getSession } from "../lib/session";

export default async function Cart() {
  const session = await getSession();
  return (
    <main className="flex-1 flex flex-col main-section">
      <section>
        <h2 className="text-3xl">Shopping Cart</h2>
        <CartList />
        {session ? (
          <CheckoutButton />
        ) : (
          <p className="text-center text-lg">Login to checkout</p>
        )}
      </section>
      <Newest />
    </main>
  );
}
