import CartList from "../components/cartList";

export default function Cart() {
  return (
    <main className="flex-1 flex flex-col main-section">
      <h2 className="text-3xl">Shopping Cart</h2>
      <CartList />
    </main>
  );
}
