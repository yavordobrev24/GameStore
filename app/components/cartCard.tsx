import { CartItem } from "../lib/definitions";

import RemoveButton from "./removeButton";
import CartQuantity from "./cartQuantity";

export default function CartCard({ cartItem }: { cartItem: CartItem }) {
  return (
    <div className="border-[1px] min-h-[30vh] rounded-lg flex flex-col md:flex-row items-center justify-center gap-[1rem] p-[1rem] min-w-[100%] mb-5 ">
      <img
        className="max-w-[10%]"
        src={cartItem.imageurl}
        alt={cartItem.title}
      />
      <p className="text-2xl">{cartItem.title}</p>
      <p className="italic">${cartItem.price}</p>
      <CartQuantity cartItemId={cartItem.id} />
      <RemoveButton cartItem={cartItem} />
    </div>
  );
}
