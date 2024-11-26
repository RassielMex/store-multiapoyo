import styled from "styled-components";
import { ProductFromDb } from "../../models/Product";
import dummyImg from "../../assets/img/dummy.jpeg";

export default function ProductCard({ product }: { product: ProductFromDb }) {
  return (
    <CardContainer>
      <CardImage src={dummyImg} />
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <CardButton>Agregar al carrito</CardButton>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  padding: 1rem;
  background-color: "white";
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  width: fit-content;
`;

const CardImage = styled.img`
  height: 120px;
  @media (min-width: 1224px) {
    height: 180px;
  }
`;

const CardButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  background-color: #4287f5;
  color: white;
  border: 1px solid #4287f5;
  font-size: 1rem;

  &:hover {
    background-color: #ffff;
    color: #4287f5;
    cursor: pointer;
  }
`;
