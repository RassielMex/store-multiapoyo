import styled from "styled-components";
import dummyImg from "../../assets/img/dummy.jpeg";

export default function FavoriteCard() {
  return (
    <CardContainer>
      <CardTitle>Titulo</CardTitle>
      <CardImage src={dummyImg} />
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
  height: 90px;
`;

const CardTitle = styled.h4`
  margin: 0;
  font-weight: bold;
`;
