import styled from 'styled-components';

const MoviesListSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.header`
  display: grid;
  grid-template-columns: 30px auto;
  align-items: center;
  > svg {
    color: #D9897B;
    justify-self: flex-start;
    font-size: 1.4rem;
  }
`;

const H2 = styled.h2`
  font-family: 'Bebas Neue Light';
  padding-top: 6px;
`;

const MoviesListContainer = styled.section`
  display: grid;
  grid-template-columns: 309px repeat(4, 148px);
  grid-gap: 18px;
  grid-template-rows: 220px 220px;
  grid-template-areas:
    'highlight .'
    'highlight .';
`;

export default {
  MoviesListSection,
  TitleContainer,
  H2,
  MoviesListContainer,
};
