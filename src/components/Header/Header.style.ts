import styled from 'styled-components';
import background2 from '../../assets/2.jpg';

export interface HeaderContainerProps {
  background?: string;
}

const H1 = styled.h1`
  text-transform: uppercase;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 6px rgb(150 150 150);
  font-size: 2.3rem;
`;

const HeaderContainer = styled.header<HeaderContainerProps>`
  height: 400px;
  background: url(${(props) => props.background ?? background2});
  background-size: cover;
  background-position: top;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const style = { HeaderContainer, H1 };

export default  style;
