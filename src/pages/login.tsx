import { FormEvent, useEffect, useRef, useState } from "react";
import {
  InputForm,
  LoginButton,
  LoginForm,
  Main,
  WrapperForm,
  ErrorMessage,
} from "../components/login/login-components";
import { loginSchema } from "../models/login-schema";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { onLogin } from "../store/slices/login-slice";
import { useNavigate } from "react-router";

type ErrorMessages = {
  email: string[] | undefined;
  password: string[] | undefined;
};

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const { isLoggedIn, error, message } = useAppSelector((state) => {
    return state.login;
  });
  const ref = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState<ErrorMessages>({
    email: [],
    password: [],
  });

  const handlesubmit = (event: FormEvent) => {
    event.preventDefault();

    //Get data and parse
    const formData = new FormData(ref.current!);
    const data = Object.fromEntries(formData);
    const parse = loginSchema.safeParse(data);

    if (!parse.success) {
      //return errors
      const errors = parse.error.flatten().fieldErrors;
      setErrorMsg({ email: errors.email, password: errors.password });
      return;
    }
    //Clear error and login
    setErrorMsg({ email: [], password: [] });
    dispatch(onLogin(parse.data));
  };

  useEffect(() => {
    //Redictect if logged
    if (isLoggedIn) {
      navigate("/");
    }
  }, [navigate, isLoggedIn]);

  return (
    <Main>
      <WrapperForm>
        <h3>Bievenido, provea sus credenciales</h3>
        <LoginForm className="login-form" onSubmit={handlesubmit} ref={ref}>
          <InputForm placeholder="email" name="email" id="email" />
          {errorMsg?.email &&
            errorMsg.email.map((er, index) => {
              return <ErrorMessage key={er + index}>{er}</ErrorMessage>;
            })}
          <InputForm
            placeholder="password"
            name="password"
            id="password"
            type="password"
          />
          {errorMsg?.password &&
            errorMsg.password.map((er, index) => {
              return <ErrorMessage key={er + index}>{er}</ErrorMessage>;
            })}
          <LoginButton type="submit">Ingresar</LoginButton>
        </LoginForm>
        {error && <ErrorMessage>{message}</ErrorMessage>}
      </WrapperForm>
    </Main>
  );
}
