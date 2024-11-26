// type Props = {};

import styled from "styled-components";
import FavoriteCard from "./favorite-card";

export default function FavoritesContainer() {
  return (
    <CardsWrapper>
      <h3>Favoritos</h3>
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
    </CardsWrapper>
  );
}

const CardsWrapper = styled.div`
  padding: 0.5rem 1rem;
  border: 1px solid;
  border-radius: 8px;
`;
