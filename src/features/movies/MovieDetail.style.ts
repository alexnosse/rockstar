import styled from 'styled-components';

const MovieDetailWrapper = styled.section`
  width: 100%;
  padding: 90px 0 20px;
  background: rgba(0, 0, 0, 0.6);
`;

const MovieDetailContainer = styled.article`
  max-width: 973px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 300px auto;
  > img {
    border-radius: 10px;
  }
`;

const MovieDetailsText = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  padding-left: 12px;
  grid-gap: 12px;
  > * {
    margin: 0;
  }
  > h3 {
    font-size: 2.5rem;
    margin: 0;
  }
  > p {
    font-size: 1.2rem;
  }
`;

const RatingContainer = styled.div`
  display: grid;
  grid-template-columns: 70px repeat(5, 20px);
  align-items: center;
  > p {
    font-size: 1.2rem;
    font-weight: bold;
  }
  > svg {
    width: 20px;
    color: gold;
  }
`;
const style = {
  MovieDetailWrapper,
  MovieDetailContainer,
  MovieDetailsText,
  RatingContainer,
};
export default style;
