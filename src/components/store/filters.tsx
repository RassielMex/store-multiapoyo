import { ChangeEvent, useRef } from "react";
import styled from "styled-components";
import { ProductCategory } from "../../models/Product";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import { useDebouncedCallback } from "use-debounce";

export default function Filters() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = useDebouncedCallback(() => {
    const search = inputRef.current?.value;
    if (search) {
      searchParams.set("search", search);
    } else {
      searchParams.delete("search");
    }
    navigate(`${location.pathname}?${searchParams.toString()}`, {
      replace: true,
    });
  }, 500);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const category = event.currentTarget?.value;

    if (category) {
      searchParams.set("category", event.currentTarget.value);
    } else {
      searchParams.delete("category");
    }
    navigate(`${location.pathname}?${searchParams.toString()}`, {
      replace: true,
    });
  };
  return (
    <FiltersWrapper>
      <SearchInput
        placeholder="Buscar..."
        id="search"
        name="search"
        ref={inputRef}
        onChange={handleInputChange}
      />
      <SelectCategory
        id="category"
        name="category"
        onChange={handleSelectChange}
      >
        <option value="">Categoría</option>
        <option value={ProductCategory.CLOTHING}>Ropa</option>
        <option value={ProductCategory.FOOD}>Comida</option>
        <option value={ProductCategory.TECH}>Tecnologia</option>
        <option value={ProductCategory.HOME}>Hogar</option>
      </SelectCategory>
    </FiltersWrapper>
  );
}

const FiltersWrapper = styled.div`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  @media (min-width: 650px) {
    flex-direction: row;
  }
`;

const SearchInput = styled.input`
  border: 2px solid gray;
  outline: none;
  border-radius: 8px;
  padding: 1rem;
  background: none;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 650px) {
    width: 50%;
  }
`;

const SelectCategory = styled.select`
  border: 2px solid gray;
  outline: none;
  border-radius: 8px;
  padding: 1rem;
  background: none;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 650px) {
    width: fit-content;
  }
`;
