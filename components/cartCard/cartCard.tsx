import { CartItem } from "../../app/lib/definitions";

import RemoveButton from "../removeButton/removeButton";
import CartQuantity from "../cartQuantity/cartQuantity";

export default function CartCard({ cartItem }: { cartItem: CartItem }) {
  return (
    <div className=" relative border-y-[1px] min-h-[30vh] flex flex-wrap flex-col md:flex-row place-items-center justify-center gap-[2rem] p-[1rem] min-w-[100%] mb-5 ">
      <img
        className="max-w-[10%] min-w-[100px]"
        src={cartItem.imageurl}
        alt={cartItem.title}
      />
      <div className="flex flex-col items-center">
        <p className="text-2xl">{cartItem.title}</p>
        <p className="italic mb-5">${cartItem.price}</p>
        <CartQuantity cartItemId={cartItem.id} />
      </div>

      <RemoveButton cartItem={cartItem} />
    </div>
  )
}
