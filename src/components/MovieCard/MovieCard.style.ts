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
  background-size: 100%;
  position: relative;
  transition: background-size 0.6s ease-in;
  -moz-transition: background-size 0.6s ease-in;
  -ms-transition: background-size 0.6s ease-in;
  -o-transition: background-size 0.6s ease-in;
  -webkit-transition: background-size 0.6s ease-in;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    background-size: 110%;
    > div {
      height: 20%;
      opacity: 1;
    }
  }
  :not(:hover) {
    background-size: 100%;
    > div {
      height: 0;
      opacity: 0;
    }
  }
`;

const MovieCardTitleContainer = styled.div`
  transition: all 0.6s ease-in;
  -moz-transition: all 0.6s ease-in;
  -ms-transition: all 0.6s ease-in;
  -o-transition: all 0.6s ease-in;
  -webkit-transition: all 0.6s ease-in;
  position: absolute;
  bottom: 0;
  height: 0%;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const MovieCardTitle = styled.p<MovieCardContainerProps>`
  color: white;
  text-shadow: 2px 2px 6px rgb(150 150 150);
  font-family: 'Bebas Neue';
  font-size: ${(props) =>
    props.size === MovieCardSize.big ? `1.4rem` : `1rem`};
  box-sizing: border-box;
  padding: 12px;
`;

const style = {
  MovieCardContainer,
  MovieCardTitleContainer,
  MovieCardTitle,
};

export default style;
