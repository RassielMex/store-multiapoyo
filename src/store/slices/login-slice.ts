import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginUser, UserFromDb } from "../../models/User";

import type { AppDispatch } from "../store";
import { getUserFromDb } from "../../lib/data";

// Define a type for the slice state
interface LoginState {
  isLoggedIn: boolean;
  error: boolean;
  message: string;
  user: UserFromDb | null;
  loading: boolean;
  loginDate: number;
}

// Define the initial state using that type
const initialState: LoginState = {
  isLoggedIn: false,
  error: false,
  message: "",
  user: null,
  loading: false,
  loginDate: 0,
};

export const loginSlice = createSlice({
  name: "login",
  // `createSlice` will infer the state type from the `initialState` argument
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
      state.user = action.payload.user;
      state.loginDate = action.payload.loginDate;
    },
    logError: (state, action: PayloadAction<string>) => {
      state.error = true;
      state.message = action.payload;
      state.loading = false;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.error = false;
      state.message = "";
      state.loading = false;
    },
    onRequest: (state) => {
      state.loading = true;
    },
    replaceToken: (
      state,
      action: PayloadAction<{ accesToken: string; refreshDate: number }>
    ) => {
      if (state.user) {
        state.user.accessToken = action.payload.accesToken;
        state.loginDate = action.payload.refreshDate;
      }
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
export const onLogin = (user: LoginUser) => {
  return async (dispatch: AppDispatch) => {
    dispatch(onRequest());
    try {
      const request = getUserFromDb(user);
      if (request) {
        dispatch(
          logSuccess({
            user: request,
            loginDate: Date.now(),
          })
        );
      }
    } catch (error) {
      console.log(error);
      dispatch(logError("Error al intentar acceder"));
    }
  };
};

// export const requestNewToken = (refreshToken: string, loginDate: number) => {
//   return async (dispatch: AppDispatch) => {
//     if (Date.now() - loginDate >= 3600000) {
//       console.log("new token...");
//       try {
//         const request = await axios.post(
//           process.env.REACT_APP_API_BASE + "/user/token/refresh/",
//           { refresh: refreshToken }
//         );
//         if (request.status === 200) {
//           console.log(request.data);
//           dispatch(
//             replaceToken({
//               accesToken: request.data?.access,
//               refreshDate: Date.now(),
//             })
//           );
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };
// };

export const { logSuccess, logOut, logError, onRequest, replaceToken } =
  loginSlice.actions;

export default loginSlice.reducer;
