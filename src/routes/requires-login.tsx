import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { useEffect } from "react";
import { getSession } from "../store/slices/login-slice";

export default function RequiresLogin({ children }: { children: JSX.Element }) {
  const { isLoggedIn } = useAppSelector((state) => {
    return state.login;
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSession());
  }, [dispatch]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
    //return () => {};
  }, [isLoggedIn, navigate]);

  return <>{children}</>;
}
