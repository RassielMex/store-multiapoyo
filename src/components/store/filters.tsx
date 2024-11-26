import styled from "styled-components";

export default function Filters() {
  return (
    <FiltersWrapper>
      <SearchInput placeholder="Buscar..." id="search" name="search" />
      <SelectCategory id="category" name="category">
        <option value="">Categoría</option>
        <option value="jeans">Jeans</option>
        <option value="shirts">Shirts</option>
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
