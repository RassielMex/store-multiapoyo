import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct, ProductFromDb } from "../../models/Product";

// Define a type for the slice state
interface CartState {
  products: CartProduct[];
  itemsCount: number;
}

// Define the initial state using that type
const initialState: CartState = {
  products: [],
  itemsCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addItem: (
      state,
      action: PayloadAction<{ product: CartProduct | ProductFromDb }>
    ) => {
      //Check for existing
      const existsProduct = state.products.find((product) => {
        return product.id === action.payload.product.id;
      });

      if (existsProduct) {
        //find and increment count
        const stateCopy = state.products.map((product) => {
          if (product.id === action.payload.product.id) {
            return { ...product, count: product.count + 1 };
          }
          return product;
        });
        state.products = stateCopy.slice();
      } else {
        //Add and increment count
        const stateCopy = state.products.slice();
        const newProduct: CartProduct = {
          ...action.payload.product,
          count: 1,
        };
        stateCopy.push(newProduct);
        state.products = stateCopy.slice();
      }
      state.itemsCount = state.itemsCount + 1;
    },
    deleteItem: (
      state,
      action: PayloadAction<{ product: CartProduct | ProductFromDb }>
    ) => {
      //Check for existing
      const existsProduct = state.products.find((product) => {
        return product.id === action.payload.product.id;
      });

      if (existsProduct) {
        //find and decrement count
        const stateCopy = state.products.map((product) => {
          if (product.id === action.payload.product.id) {
            return { ...product, count: product.count - 1 };
          }
          return product;
        });
        //only saves ones with count >0
        state.products = stateCopy.filter((product) => {
          return product.count > 0;
        });

        //decrement general count
        if (state.itemsCount > 0) {
          state.itemsCount = state.itemsCount - 1;
        }
      }
    },
  },
});

export const { addItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
