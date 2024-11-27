//import { useState } from "react";
//import { useNavigate } from "react-router";

import CheckoutContainer from "../components/checkout/checkout-container";
import StoreNavbar from "../components/shared/store-navbar";

export default function CheckoutPage() {
  return (
    <>
      <StoreNavbar />
      <CheckoutContainer />
    </>
  );
}
