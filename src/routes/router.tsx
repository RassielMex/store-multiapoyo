import { Route, Routes } from "react-router";
import StorePage from "../pages/store";
import LoginPage from "../pages/login";
import CheckoutPage from "../pages/checkout";
import RequiresLogin from "./requires-login";

export default function RouterComponent() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequiresLogin>
            <StorePage />
          </RequiresLogin>
        }
      />
      <Route
        path="/checkout"
        element={
          <RequiresLogin>
            <CheckoutPage />
          </RequiresLogin>
        }
      />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
