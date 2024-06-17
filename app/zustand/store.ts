import { create } from "zustand";
import { ProductRespData } from "../client/types/responses/StockResponses";
import { UserProfile } from "../client/types/responses/authResponses";

export type CartItemtype = {
  product: ProductRespData;
  count: number;
};

type CartStore = {
  cart: CartItemtype[] | [];
  append: (object: CartItemtype) => void;
  deleteitem: (object: CartItemtype) => void;
  deleteAll: () => void;
  setCart: (item: CartItemtype[]) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  append: (object: CartItemtype) => {
    set((state) => {
      const exists = state.cart.some(
        (item) => item.product.id === object.product.id
      );
      if (!exists) {
        return { cart: [...state.cart, object] };
      }
      return state; // Return the state unchanged if the item already exists
    });
  },
  deleteitem: (object: CartItemtype) => {
    set((state) => ({
      cart: state.cart.filter((o) => o.product.id !== object.product.id),
    }));
  },
  setCart: (items: CartItemtype[]) => set({ cart: items }),
  deleteAll: () => set({ cart: [] }),
}));

export const useUserStore = create((set) => ({
  user: undefined,
  setUser: (user: UserProfile) => set({ user }),
  clearUser: () => set({ user: undefined }),
}));
