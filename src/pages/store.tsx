import styled from "styled-components";
import StoreNavbar from "../components/shared/store-navbar";
import ProductsContainer from "../components/store/products-container";
import Filters from "../components/store/filters";

export default function StorePage() {
  return (
    <>
      <StoreNavbar />
      <StoreContainer>
        <Filters />
        <ProductsContainer />
      </StoreContainer>
    </>
  );
}

const StoreContainer = styled.div`
  margin: 1rem 2rem;
`;
