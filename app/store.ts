import { create } from "zustand";
import { CartItem } from "./lib/definitions";

type Store = {
  cart: CartItem[];
  addCartItem: (cartItem: CartItem) => void;
  updateCartItem: (cartItem: CartItem) => void;
  removeCartItem: (cartItem: CartItem) => void;
  clearCart: () => void;
};

export const useStore = create<Store>()((set) => ({
  cart: [],
  addCartItem: (cartItem: CartItem) => {
    set((state) => ({ cart: [...state.cart, cartItem] }));
  },
  updateCartItem: (cartItem: CartItem) => {
    set((state) => ({
      cart: [
        ...state.cart.map((ci: CartItem) => {
          if (ci.id === cartItem.id) {
            return { ...cartItem };
          }
          return ci;
        }),
      ],
    }));
  },
  removeCartItem: (cartItem: CartItem) => {
    set((state) => ({ cart: state.cart.filter((ci) => ci.id == cartItem.id) }));
  },
  clearCart: () => {
    set(() => ({ cart: [] }));
  },
}));
