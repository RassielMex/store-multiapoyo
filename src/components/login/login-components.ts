import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapperForm = styled.section`
  padding: 4em;
  background: #ffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
`;

const InputForm = styled.input`
  border: 2px solid gray;
  outline: none;
  border-radius: 8px;
  padding: 1rem;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const LoginButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  background-color: #4287f5;
  color: white;
  border: none;
  font-size: 1rem;
`;

const ErrorMessage = styled.p`
  margin-top: 0;
  color: #a83264;
  font-size: 1rem;
  font-weight: 300;
`;

export { Main, WrapperForm, InputForm, LoginButton, LoginForm, ErrorMessage };
