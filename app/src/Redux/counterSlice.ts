import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductRespData } from "../client/types/responses/StockResponses";
// import type { RootState } from "../../app/store";

// Define a type for the slice state
export interface CounterState {
  ProductsList: ProductRespData[];
}

// Define the initial state using that type
const initialState: CounterState = {
  ProductsList: [],
};

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<ProductRespData>) => {
      state.ProductsList.push(action.payload);
    },
    decrement: (state, action: PayloadAction<ProductRespData>) => {
      state.ProductsList.filter((item) => {
        return item !== action.payload;
      });
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
