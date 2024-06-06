import { create } from "zustand";
import { CartItem } from "./lib/definitions";
import { persist } from "zustand/middleware";

type Store = {
  cart: CartItem[];
  addCartItem: (cartItem: CartItem) => void;
  updateCartItem: (cartItem: CartItem) => void;
  removeCartItem: (cartItem: CartItem) => void;
  clearCart: () => void;
};

export const useStore = create<Store>()(
  persist(
    (set) => ({
      cart: [],
      addCartItem: (cartItem: CartItem) => {
        set((state) => ({
          cart: [
            ...state.cart.filter((item: CartItem) => item.id != cartItem.id),
            cartItem,
          ],
        }));
      },
      updateCartItem: (cartItem: CartItem) => {
        set((state) => ({
          cart: [
            ...state.cart.map((item: CartItem) => {
              if (item.id === cartItem.id) {
                return { ...cartItem };
              }
              return item;
            }),
          ],
        }));
      },
      removeCartItem: (cartItem: CartItem) => {
        set((state) => ({
          cart: [...state.cart.filter((item) => item.id != cartItem.id)],
        }));
      },
      clearCart: () => {
        set(() => ({ cart: [] }));
      },
    }),
    {
      name: "cart",
    }
  )
);
