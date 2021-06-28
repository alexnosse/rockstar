import React, { useEffect, useState } from 'react';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { MovieCardSize, MovieModel } from '../../model/MovieModel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';

import Style from './Movies.style';
import { fetchAllMovies, getHighlightedMovie, selectLandingPageMovies } from './moviesSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

export interface MoviesProps {}

export function Movies(props: MoviesProps) {
  const [isLoading, setLoading] = useState(true);
  
  const dispatch = useAppDispatch();
  const movies: MovieModel[] = useAppSelector(selectLandingPageMovies);
  const highlightedMovie: MovieModel =useAppSelector(getHighlightedMovie);
  const movieStatus = useAppSelector((state) => state.movies.status);

  useEffect(() => {
    if (movieStatus === 'idle') {
      dispatch(fetchAllMovies());
    }
    if (movieStatus === 'succeeded') {
      setLoading(false);
    }
  }, [movieStatus, dispatch]);

  if (isLoading ) {
    return <div>Loading content !</div>;
  }

  return (
    <Style.MoviesListSection>
      <Style.TitleContainer>
        <FontAwesomeIcon icon={faFire} />
        <Style.H2>Discover</Style.H2>
      </Style.TitleContainer>
      <Style.MoviesListContainer>
        {highlightedMovie && <MovieCard movie={highlightedMovie} size={MovieCardSize.big} />}
        {movies.length > 0 &&
          movies.map((movie: MovieModel) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              size={MovieCardSize.small}
            />
          ))}
      </Style.MoviesListContainer>
    </Style.MoviesListSection>
  );
}
