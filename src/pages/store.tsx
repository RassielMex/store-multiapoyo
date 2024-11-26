import styled from "styled-components";
import StoreNavbar from "../components/shared/store-navbar";
import ProductsContainer from "../components/store/products-container";
import Filters from "../components/store/filters";
//import FavoritesContainer from "../components/store/favorites-container";

export default function StorePage() {
  return (
    <>
      <StoreNavbar />
      <StoreContainer>
        <Filters />
        <ProductsWrapper>
          <ProductsContainer />
          {/* <FavoritesContainer /> */}
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
