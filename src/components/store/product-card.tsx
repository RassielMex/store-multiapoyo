import styled from "styled-components";
import dummyImg from "../../assets/img/dummy.jpeg";
import Draggable from "react-draggable";
import { useRef } from "react";

export default function ProductCard() {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <CardContainer
        ref={nodeRef}
        onDragStart={() => {
          console.log("draggin");
        }}
      >
        <CardImage src={dummyImg} />
        <h4>Titulo</h4>
        <p>Descripcion</p>
        <p>Price</p>
      </CardContainer>
    </Draggable>
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
  height: 180px;
`;
