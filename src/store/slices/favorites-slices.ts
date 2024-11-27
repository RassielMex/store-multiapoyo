import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductFromDb } from "../../models/Product";

// Define a type for the slice state
interface FavoriteState {
  showFavorites: boolean;
  products: ProductFromDb[];
}

// Define the initial state using that type
const initialState: FavoriteState = {
  showFavorites: false,
  products: [],
};

export const favoriteSlice = createSlice({
  name: "favorites",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addFavItem: (state, action: PayloadAction<{ product: ProductFromDb }>) => {
      const existsProduct = state.products.find((product) => {
        return product.id === action.payload.product.id;
      });
      if (!existsProduct) {
        const stateCopy = state.products.slice();
        stateCopy.push(action.payload.product);
        state.products = stateCopy.slice();
      }
    },
    deleteFavItem: (
      state,
      action: PayloadAction<{ product: ProductFromDb }>
    ) => {
      const existsProduct = state.products.find((product) => {
        return product.id === action.payload.product.id;
      });
      if (existsProduct) {
        const stateCopy = state.products.slice();

        state.products = stateCopy.filter((product) => {
          return product.id !== action.payload.product.id;
        });
      }
    },
    showFavorites: (state, action: PayloadAction<{ show: boolean }>) => {
      state.showFavorites = action.payload.show;
    },
    toggleFavorites: (state) => {
      state.showFavorites = !state.showFavorites;
    },
  },
});

export const { addFavItem, deleteFavItem, toggleFavorites } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
