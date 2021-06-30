import styled from 'styled-components';

const RatingContainer = styled.div`
  z-index: 4;
  display: grid;
  align-items: center;
  grid-template-columns: auto 20px;
  border: 1px solid red;
  padding: 0 12px;
  cursor: pointer;
  max-height: 50px;
  position: relative;

  > svg {
    justify-self: end;
  }
`;

interface RatingBackdropProps {
  visible: boolean;
}

const RatingBackdrop = styled.div<RatingBackdropProps>`
  width: 100%;
  height: 100%;
  z-index: 3;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
`;

const StarsContainer = styled.article<RatingBackdropProps>`
  cursor: initial;
  background: #fff;
  border: 1px solid red;
  z-index: 6;
  position: absolute;
  top: 48px;
  right: -1px;
  padding: 24px;
  display: ${(props) => (props.visible ? 'grid' : 'none')};
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 1fr;
  z-index: 6;
  > svg {
    cursor: pointer;
    color: #d73d00;
  }
`;

const ApplyFilterButton = styled.button<RatingBackdropProps>`
  padding: 12px;
  background: #d73d00;
  border: 1px solid #d73d00;
  grid-column-start: 1;
  grid-column-end: five;
  border-radius: 30px;
  color: white;
  font-family: 'Bebas Neue';
  cursor: pointer;
  display: ${(props) => (props.visible ? 'initial' : 'none')};
`;

const style = {
  RatingBackdrop,
  RatingContainer,
  StarsContainer,
  ApplyFilterButton,
};

export default style;
