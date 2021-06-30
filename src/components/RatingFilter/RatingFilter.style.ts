import styled from 'styled-components';

const RatingContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 120px auto;
  > p {
    color: #d73d00;
  }
`;

const StarsContainer = styled.article`
  cursor: initial;
  background: #fff;
  border: 1px solid red;
  padding: 12px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  z-index: 6;
  justify-content: center;
  align-items: center;
  > svg {
    cursor: pointer;
    color: #d73d00;
  }
`;

const style = {
  RatingContainer,
  StarsContainer,
};

export default style;
