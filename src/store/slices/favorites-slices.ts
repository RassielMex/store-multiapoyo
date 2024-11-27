import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductFromDb } from "../../models/Product";
import { AppDispatch } from "../store";
import { getProductById } from "../../lib/data";

// Define a type for the slice state
interface FavoriteState {
  showFavorites: boolean;
  products: ProductFromDb[];
  error: boolean;
  message: string;
  loading: boolean;
}

// Define the initial state using that type
const initialState: FavoriteState = {
  showFavorites: false,
  products: [],
  error: false,
  message: "",
  loading: false,
};

export const favoriteSlice = createSlice({
  name: "favorites",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    onRequest: (state) => {
      state.loading = true;
    },
    onError: (state, action: PayloadAction<{ message: string }>) => {
      state.error = true;
      state.message = action.payload.message;
    },
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
    deleteFavItem: (state, action: PayloadAction<{ productId: string }>) => {
      const existsProduct = state.products.find((product) => {
        return product.id === action.payload.productId;
      });
      if (existsProduct) {
        const stateCopy = state.products.slice();

        state.products = stateCopy.filter((product) => {
          return product.id !== action.payload.productId;
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

export const setFavoriteProduct = (productId: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(onRequest());
    try {
      const request = getProductById(productId);
      //console.log(request);
      if (request) {
        dispatch(addFavItem({ product: request }));
        return;
      }
      dispatch(onError({ message: "No existe producto con ese ID" }));
    } catch (error) {
      console.log(error);
      dispatch(onError({ message: "Error al conectarse a la base de datos" }));
    }
  };
};

export const {
  addFavItem,
  deleteFavItem,
  toggleFavorites,
  onRequest,
  onError,
} = favoriteSlice.actions;

export default favoriteSlice.reducer;
