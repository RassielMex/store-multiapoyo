// type Props = {};

import styled from "styled-components";
import FavoriteCard from "./favorite-card";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { setFavoriteProduct } from "../../store/slices/favorites-slices";

export default function FavoritesContainer() {
  const { products } = useAppSelector((state) => state.favorite);
  const dispatch = useAppDispatch();

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("id");
    dispatch(setFavoriteProduct(id));
  };

  return (
    <CardsWrapper onDragOver={handleDragOver} onDrop={handleDrop}>
      <h3>Favoritos</h3>
      {products?.map((product) => {
        return <FavoriteCard key={product.id} product={product} />;
      })}
    </CardsWrapper>
  );
}

const CardsWrapper = styled.div`
  padding: 0.5rem 1rem;
  border: 1px solid;
  border-radius: 8px;
  min-height: 100%;
`;
