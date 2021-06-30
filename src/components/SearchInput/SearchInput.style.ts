import styled from 'styled-components';

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    margin-right: -30px;
    z-index: 1;
    color: #ccc;
  }
`;
const SearchInput = styled.input`
  padding: 6px 24px;
  padding-left: 48px;
  border-radius: 30px;
  box-shadow: 3px 3px 10px 2px rgb(0 0 0 / 20%) inset;
  -webkit-box-shadow: 3px 3px 10px 2px rgb(0 0 0 / 20%) inset;
  -moz-box-shadow: 3px 3px 10px 2px rgba(0, 0, 0, 0.49) inset;
  border: 0;
  outline: 0;
  width: 600px;
  height: 36px;
  ::placeholder {
    font-style: italic;
    color: #b8b8b8;
  }
`;

const style = {
  SearchInputContainer,
  SearchInput,
};
export default style;
