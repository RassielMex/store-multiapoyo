import styled from "styled-components";
import dummyImg from "../../assets/img/dummy.jpeg";
import { CartProduct } from "../../models/Product";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { addItem, deleteItem } from "../../store/slices/cart-slice";

export default function CheckoutCard({ product }: { product: CartProduct }) {
  const dispatch = useAppDispatch();
  const handleAddItem = () => {
    dispatch(addItem({ product }));
  };
  const handleRemoveItem = () => {
    dispatch(deleteItem({ product }));
  };

  return (
    <CardContainer>
      <CardContent>
        <CardImage src={dummyImg} />
        <CardTextWrapper>
          <CardTitle>{product.title}</CardTitle>
          <CardBodyText>{product.price}</CardBodyText>
          <CardBodyText>
            Subtotal: ${product.count * product.price}
          </CardBodyText>
        </CardTextWrapper>
      </CardContent>
      <CardActions>
        <CardButton onClick={handleRemoveItem}>-</CardButton>
        <ProductQuantity>{product.count}</ProductQuantity>
        <CardButton $right onClick={handleAddItem}>
          +
        </CardButton>
      </CardActions>
    </CardContainer>
  );
}
const CardContainer = styled.div`
  padding: 1rem;
  background-color: "white";
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  width: 100%;
`;

const CardContent = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const CardImage = styled.img`
  height: 90px;
`;

const CardTitle = styled.h4`
  margin: 0;
  font-weight: bold;
`;

const CardBodyText = styled.p`
  margin: 0;
`;

const CardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const CardActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2px;
`;

const CardButton = styled.div<{ $right?: boolean }>`
  padding: 0.2rem;
  border-radius: ${(props) =>
    props.$right ? "0px 8px 8px 0px" : "8px 0px 0px 8px"};
  background-color: none;
  color: #4287f5;
  border: 1px solid;
  font-size: 1rem;
  height: 1rem;
  width: 100%;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
`;

const ProductQuantity = styled.p`
  margin: 4px 12px;
`;
