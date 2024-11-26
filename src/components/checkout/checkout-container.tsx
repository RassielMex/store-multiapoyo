import styled from "styled-components";
import CheckoutCard from "./checkout-card";

export default function CheckoutContainer() {
  return (
    <CheckoutWrapper>
      <div>
        <CheckoutCard />
        <CheckoutCard />
        <CheckoutCard />
        <CheckoutCard />
      </div>
      <TextWrapper>
        <span>Total: </span>
        <span>$1000</span>
      </TextWrapper>
    </CheckoutWrapper>
  );
}

const CheckoutWrapper = styled.div`
  min-width: 400px;
  padding: 1rem;
  justify-self: center;
`;

const TextWrapper = styled.div`
  margin-top: 0.5rem;
  text-align: end;
`;
