import styled from 'styled-components';

const MoviesListSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 973px;
  margin: 0 auto;
`;

const TitleContainer = styled.header`
  display: grid;
  grid-template-columns: 30px auto 240px;
  align-items: center;
  > svg {
    color: #d73d00;
    justify-self: flex-start;
    font-size: 1.4rem;
  }
`;

const H2 = styled.h2`
  font-weight: bold;
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
  > a:first-child {
    grid-area: highlight;
  }
`;

const NoMoviesParagraph = styled.p`
  font-size: 2.3rem;
  color: #d73d00;
  font-family: 'Bebas Neue';
`;
const style = {
  MoviesListSection,
  TitleContainer,
  H2,
  MoviesListContainer,
  NoMoviesParagraph,
};

export default style;
