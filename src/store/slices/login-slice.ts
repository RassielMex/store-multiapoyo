import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginUser, UserFromDb } from "../../models/User";

import type { AppDispatch } from "../store";
import { getUserFromDb } from "../../lib/data";

// Define a type for the slice state
interface LoginState {
  isLoggedIn: boolean;
  error: boolean;
  message: string;
  loading: boolean;
  loginDate: number;
  user: UserFromDb | null;
}

// Define the initial state using that type
const initialState: LoginState = {
  isLoggedIn: false,
  error: false,
  message: "",
  loading: false,
  loginDate: 0,
  user: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logSuccess: (
      state,
      action: PayloadAction<{
        user: UserFromDb;
        loginDate: number;
      }>
    ) => {
      state.isLoggedIn = true;
      state.error = false;
      state.message = "Success";
      state.loginDate = action.payload.loginDate;
    },
    logError: (state, action: PayloadAction<string>) => {
      state.error = true;
      state.message = action.payload;
      state.loading = false;
      state.isLoggedIn = false;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.error = false;
      state.message = "";
      state.loading = false;
    },
    sessionActive: (state, action: PayloadAction<UserFromDb>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    onRequest: (state) => {
      state.loading = true;
    },
  },
});

//Selectors
export const onLogin = (user: LoginUser) => {
  return async (dispatch: AppDispatch) => {
    dispatch(onRequest());
    try {
      const request = getUserFromDb(user);
      //console.log(request);
      if (request) {
        //save in session storage and dispatch success
        const user = JSON.stringify(request);
        sessionStorage.setItem("user", user);
        dispatch(
          logSuccess({
            user: request,
            loginDate: Date.now(),
          })
        );
        return;
      }
      dispatch(logError("Credenciales Invalidas"));
    } catch (error) {
      console.log(error);
      dispatch(logError("Error al intentar acceder"));
    }
  };
};

export const getSession = () => {
  return (dispatch: AppDispatch) => {
    //Get existing user
    const userFromStorage = sessionStorage.getItem("user");
    if (!userFromStorage) {
      dispatch(logError(""));
      return;
    }
    const user = JSON.parse(userFromStorage) as UserFromDb;
    dispatch(sessionActive(user));
  };
};

export const clearSession = () => {
  return (dispatch: AppDispatch) => {
    sessionStorage.removeItem("user");
    dispatch(logOut());
  };
};

export const { logSuccess, logOut, logError, onRequest, sessionActive } =
  loginSlice.actions;

export default loginSlice.reducer;
