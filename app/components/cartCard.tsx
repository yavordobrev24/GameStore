import { CartItem } from "../lib/definitions";
import RemoveButton from "./removeButton";

export default function CartCard({ cartItem }: { cartItem: CartItem }) {
  return (
    <div className="cart-card">
      <img src={cartItem.imageurl} alt={cartItem.title} />
      <p className="game-title">{cartItem.title}</p>
      <p className="game-price">${cartItem.price}</p>
      <p className="game-quantity">{cartItem.quantity} copies</p>
      <RemoveButton cartItem={cartItem} />
    </div>
  );
}
