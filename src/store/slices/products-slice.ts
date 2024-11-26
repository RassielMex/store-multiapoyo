import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppDispatch } from "../store";
import { getProducts } from "../../lib/data";
import { ProductFilter, ProductFromDb } from "../../models/Product";

// Define a type for the slice state
interface ProductsState {
  error: boolean;
  message: string;
  loading: boolean;
  products: ProductFromDb[] | null;
}

// Define the initial state using that type
const initialState: ProductsState = {
  error: false,
  message: "",
  loading: false,
  products: [],
};

export const productSlice = createSlice({
  name: "login",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    retrieveSuccess: (
      state,
      action: PayloadAction<{
        products: ProductFromDb[];
      }>
    ) => {
      state.error = false;
      state.message = "Success";
      state.products = action.payload.products.slice();
    },
    retrieveError: (state, action: PayloadAction<string>) => {
      state.error = true;
      state.message = action.payload;
      state.loading = false;
    },
    onRequest: (state) => {
      state.loading = true;
    },
    replaceProducts: (
      state,
      action: PayloadAction<{ products: ProductFromDb[] }>
    ) => {
      state.products = action.payload.products.slice();
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
export const retrieveProducts = (filter?: ProductFilter) => {
  return async (dispatch: AppDispatch) => {
    dispatch(onRequest());
    try {
      const request = filter ? getProducts(filter) : getProducts();
      //console.log(request);
      if (request) {
        dispatch(
          retrieveSuccess({
            products: request,
          })
        );
        return;
      }
      dispatch(retrieveError("No se pudo obtenr los productos"));
    } catch (error) {
      console.log(error);
      dispatch(retrieveError("Error al hacer el request"));
    }
  };
};

export const { retrieveSuccess, retrieveError, onRequest, replaceProducts } =
  productSlice.actions;

export default productSlice.reducer;
