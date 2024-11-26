import styled from "styled-components";
import ProductCard from "./product-card";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { retrieveProducts } from "../../store/slices/products-slice";
import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { ProductFilter } from "../../models/Product";

export default function ProductsContainer() {
  const { products } = useAppSelector((state) => state.product);
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (searchParams.size > 0) {
      const filter: ProductFilter = {
        search: searchParams.has("search") ? searchParams.get("search") : "",
        category: searchParams.has("category")
          ? parseInt(searchParams.get("category") || "")
          : null,
      };
      dispatch(retrieveProducts(filter));
    } else {
      dispatch(retrieveProducts());
    }
  }, [dispatch, searchParams]);

  return (
    <ProductsGrid $isFavoritesVisible={false}>
      {products?.map((product, index) => {
        return <ProductCard key={product.title + index} product={product} />;
      })}
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
