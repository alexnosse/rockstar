import styled from 'styled-components';
interface LinkButtonContainerProps {
  hasBorder: boolean;
  borderColor?: string;
}
const LinkButtonContainer = styled.div<LinkButtonContainerProps>`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  text-shadow: 2px 2px 6px rgb(150 150 150);

  ${(props) => {
    if (props.hasBorder) {
      return `
        border-radius: 30px;
        border: 1px solid ${props.borderColor ?? '#d73d00'};
      `;
    }
  }}
  > a {
    color: white;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
    :visited {
      color: white;
    }
  }
`;
const style = {
  LinkButtonContainer,
};

export default style;
