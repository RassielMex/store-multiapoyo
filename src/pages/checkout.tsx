//import { useState } from "react";
//import { useNavigate } from "react-router";

import CheckoutContainer from "../components/checkout/checkout-container";
import StoreNavbar from "../components/shared/store-navbar";

export default function CheckoutPage() {
  //const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/login", { replace: true });
  //   }
  // }, [isLoggedIn, navigate]);

  return (
    <>
      <StoreNavbar />
      <CheckoutContainer />
    </>
  );
}
