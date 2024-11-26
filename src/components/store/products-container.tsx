import styled from "styled-components";
import ProductCard from "./product-card";

export default function ProductsContainer() {
  return (
    <ProductsGrid $isFavoritesVisible={false}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ProductsGrid>
  );
}

const ProductsGrid = styled.div<{ $isFavoritesVisible: boolean }>`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, minmax(min-content, 1fr));
  grid-auto-flow: dense;
  gap: 1rem;
  justify-self: center;
  justify-items: center;

  @media (min-width: 650px) {
    grid-template-columns: repeat(2, minmax(min-content, 1fr));
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(min-content, 1fr));
  }

  @media (min-width: 1224px) {
    grid-template-columns: repeat(4, minmax(min-content, 1fr));
  }

  @media (min-width: 1600px) {
    grid-template-columns: ${(props) =>
      props.$isFavoritesVisible
        ? "repeat(4, minmax(min-content, 1fr))"
        : "repeat(5, minmax(min-content, 1fr))"};
  }
`;
