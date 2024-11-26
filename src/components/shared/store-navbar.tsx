import styled from "styled-components";

export default function StoreNavbar() {
  return (
    <Navbar>
      <NavTitle>Multiapoyo Store</NavTitle>
      <NavActions>
        <LogoutButton>Logout</LogoutButton>
        <CartWrapper>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="white"
            viewBox="0 0 256 256"
          >
            <path d="M239.71,74.14l-25.64,92.28A24.06,24.06,0,0,1,191,184H92.16A24.06,24.06,0,0,1,69,166.42L33.92,40H16a8,8,0,0,1,0-16H40a8,8,0,0,1,7.71,5.86L57.19,64H232a8,8,0,0,1,7.71,10.14ZM88,200a16,16,0,1,0,16,16A16,16,0,0,0,88,200Zm104,0a16,16,0,1,0,16,16A16,16,0,0,0,192,200Z"></path>
          </svg>
          <CartItems>4</CartItems>
        </CartWrapper>
      </NavActions>
    </Navbar>
  );
}

const Navbar = styled.nav`
  background-color: #4287f5;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
`;

const NavTitle = styled.h4`
  margin: 4px;
  color: white;
  font-size: 1.5rem;
`;

const LogoutButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  background-color: #4287f5;
  color: white;
  border: none;
  font-size: 1rem;
  &:hover {
    background-color: #2673ed;
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CartWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const CartItems = styled.span`
  color: white;
`;
