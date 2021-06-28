import styled from 'styled-components';
// import background1 from '../../assets/1.jpg';
import background2 from '../../assets/2.jpg';

interface HeaderContainerProps {
  background?: string;
}

const HeaderContainer = styled.header<HeaderContainerProps>`
  height: 400px;
  background: url(${(props) => props.background ?? background2});
  background-size: cover;
  background-position: center;
`;

const Logo = styled.img`
  width: 80px;
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

const H1 = styled.h1`
  text-transform: uppercase;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 6px rgb(150 150 150);
  font-size: 2.3rem;
`;

export default { HeaderContainer, NavContainer, Logo, H1 };
