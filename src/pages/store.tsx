import styled from "styled-components";
import StoreNavbar from "../components/shared/store-navbar";
import ProductsContainer from "../components/store/products-container";
import Filters from "../components/store/filters";
import { useAppSelector } from "../hooks/redux-hooks";
import FavoritesContainer from "../components/store/favorites-container";

export default function StorePage() {
  const { showFavorites } = useAppSelector((state) => state.favorite);

  return (
    <>
      <StoreNavbar />
      <StoreContainer>
        <Filters />
        <ProductsWrapper>
          <ProductsContainer />
          {showFavorites && <FavoritesContainer />}
        </ProductsWrapper>
      </StoreContainer>
    </>
  );
}

const StoreContainer = styled.div`
  margin: 1rem 2rem;
`;

const ProductsWrapper = styled.div`
  display: flex;
`;
