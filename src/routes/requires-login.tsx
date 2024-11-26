import { useNavigate } from "react-router";
import { useAppSelector } from "../hooks/redux-hooks";
import { useEffect } from "react";

export default function RequiresLogin({ children }: { children: JSX.Element }) {
  const { isLoggedIn } = useAppSelector((state) => {
    return state.login;
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
    //return () => {};
  }, [isLoggedIn, navigate]);

  return <>{children}</>;
}
