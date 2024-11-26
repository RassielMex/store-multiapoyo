import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct, ProductFromDb } from "../../models/Product";

// Define a type for the slice state
interface ProductsState {
  products: CartProduct[];
}

// Define the initial state using that type
const initialState: ProductsState = {
  products: [],
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
      const existsProduct = state.products.find((product) => {
        return product.id === action.payload.product.id;
      });
      if (existsProduct) {
        const stateCopy = state.products.map((product) => {
          if (product.id === action.payload.product.id) {
            return { ...product, count: product.count + 1 };
          }
          return product;
        });
        state.products = stateCopy.slice();
      } else {
        const stateCopy = state.products.slice();
        const newProduct: CartProduct = {
          ...action.payload.product,
          count: 1,
        };
        stateCopy.push(newProduct);
        state.products = stateCopy.slice();
      }
    },
    deleteItem: (
      state,
      action: PayloadAction<{ product: CartProduct | ProductFromDb }>
    ) => {
      const existsProduct = state.products.find((product) => {
        return product.id === action.payload.product.id;
      });
      if (existsProduct) {
        const stateCopy = state.products.map((product) => {
          if (product.id === action.payload.product.id) {
            return { ...product, count: product.count - 1 };
          }
          return product;
        });
        state.products = stateCopy.filter((product) => {
          return product.count > 0;
        });
      } else {
        const stateCopy = state.products.slice();
        const newProduct: CartProduct = {
          ...action.payload.product,
          count: 1,
        };
        stateCopy.push(newProduct);
      }
    },
  },
});

export const { addItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;