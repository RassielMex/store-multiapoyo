import styled from "styled-components";
import dummyImg from "../../assets/img/dummy.jpeg";

export default function ProductCard() {
  return (
    <CardContainer>
      <CardImage src={dummyImg} />
      <h4>Titulo</h4>
      <p>Descripcion</p>
      <p>Price</p>
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
  border: none;
  font-size: 1rem;

  &:hover {
    background-color: #ffff;
    color: #4287f5;
    border: 1px solid #4287f5;
    cursor: pointer;
  }
`;
