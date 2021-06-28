import styled from 'styled-components';
import { MovieCardSize } from '../../model/MovieModel';
import moviePlaceholder from '../../assets/movie-placeholder.png';

interface MovieCardContainerProps {
  size: MovieCardSize;
  thumbnail?: string;
}
const MovieCardContainer = styled.article<MovieCardContainerProps>`
  width: ${(props) => (props.size === MovieCardSize.small ? `148px` : `309px`)};
  height: ${(props) =>
    props.size === MovieCardSize.small ? `220px` : `458px`};
  background: url(${(props) => props.thumbnail ?? moviePlaceholder});
  background-position: center;
  background-size: cover;
  ${(props) => {
    if (props.size === MovieCardSize.big) {
      return `
        grid-area: highlight;
      `
    }
  }}
`;

export default {
  MovieCardContainer,
}