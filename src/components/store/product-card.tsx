import styled from "styled-components";
import dummyImg from "../../assets/img/dummy.jpeg";

export default function ProductCard() {
  return (
    <CardContainer>
      <CardImage src={dummyImg} />
      <h4>Titulo</h4>
      <p>Descripcion</p>
      <p>Price</p>
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
