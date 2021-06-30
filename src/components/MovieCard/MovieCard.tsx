import React from 'react';
import { MovieCardSize, MovieModel } from '../../model/MovieModel';

import Style from './MovieCard.style';

export interface MovieCardProps {
  size: MovieCardSize;
  movie: MovieModel;
}

export function MovieCard(props: MovieCardProps) {
  const { size, movie } = props;
  return (
    <Style.MovieCardContainer size={size} thumbnail={movie.poster_path}>
      <Style.MovieCardTitleContainer>
        <Style.MovieCardTitle size={size}>{movie.title}</Style.MovieCardTitle>
      </Style.MovieCardTitleContainer>
    </Style.MovieCardContainer>
  );
}
