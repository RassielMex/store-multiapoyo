import { useState } from "react";
import { Navigate } from "react-router";

export default function RequiresLogin({ children }: { children: JSX.Element }) {
  const isLoggedIn = useState(false);

  return <>{!isLoggedIn ? <Navigate to={"/login"} /> : children}</>;
}
