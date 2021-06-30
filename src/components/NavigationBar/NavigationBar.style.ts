import styled from 'styled-components';
const Logo = styled.img`
  width: 80px;
`;
const NavWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;
const NavContainer = styled.nav`
  color: white;
  display: grid;
  grid-template-columns: 120px auto 180px 180px;
  grid-column-gap: 12px;
  padding: 12px;
  align-items: center;
  max-width: 973px;
  margin: 0 auto;
`;

const style = {
  NavWrapper,
  Logo,
  NavContainer,
};
export default style;
