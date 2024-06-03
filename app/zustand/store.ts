import { create } from "zustand";
import { ProductRespData } from "../client/types/responses/StockResponses";

type CartStore = {
  cart: ProductRespData[] | [];
  append: (object: ProductRespData) => void;
  deleteitem: (object: ProductRespData) => void;
  deleteAll: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  append: (object: ProductRespData) => {
    set((state) => {
      const exists = state.cart.some((item) => item.id === object.id);
      if (!exists) {
        return { cart: [...state.cart, object] };
      }
      return state; // Return the state unchanged if the item already exists
    });
  },
  deleteitem: (object: ProductRespData) => {
    set((state) => ({
      cart: state.cart.filter((o) => o.id !== object.id),
    }));
  },
  deleteAll: () => set({ cart: [] }),
}));
