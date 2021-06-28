import React from 'react';
import { MovieCardSize, MovieModel } from '../../model/MovieModel';


import Style from './MovieCard.style';

export interface MovieCardProps {
  size: MovieCardSize;
  movie: MovieModel;
}

export function MovieCard(props: MovieCardProps) {
  const { size, movie } = props;
  const poster = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
  return <Style.MovieCardContainer size={size} thumbnail={movie.poster_path ? poster : undefined} />;
}
