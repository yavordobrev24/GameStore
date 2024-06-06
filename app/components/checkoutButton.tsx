import { useStore } from "../store";

export default function CheckoutButton() {
  const clearCart = useStore((store) => store.clearCart);
  return (
    <button className="btn mt-10" onClick={clearCart}>
      Checkout
    </button>
  );
}
