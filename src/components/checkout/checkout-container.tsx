import styled from "styled-components";
import CheckoutCard from "./checkout-card";
import { useAppSelector } from "../../hooks/redux-hooks";

export default function CheckoutContainer() {
  const { products } = useAppSelector((state) => state.cart);
  return (
    <CheckoutWrapper>
      <div>
        {products.map((product) => {
          return <CheckoutCard key={product.id} product={product} />;
        })}
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
