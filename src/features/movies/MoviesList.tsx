import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';

import { Header, MovieCard, RatingFilter } from '../../components';
import { MovieCardSize, MovieModel } from '../../model/MovieModel';
import Style from './MoviesList.style';

import { fetchAllMovies, selectLandingPageMovies } from './moviesSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

export interface MoviesProps {}

export function MoviesList(props: MoviesProps) {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const movies: MovieModel[] = useAppSelector(selectLandingPageMovies);
  const movieStatus = useAppSelector((state) => state.movies.status);

  useEffect(() => {
    if (movieStatus === 'idle') {
      dispatch(fetchAllMovies());
    }
    if (movieStatus === 'succeeded') {
      setLoading(false);
    }
  }, [movieStatus, dispatch, movies]);

  if (isLoading) {
    return <div>Loading content !</div>;
  }

  const background = movies.length > 0 ? movies[0].backdrop_path : undefined;
  return (
    <>
      <Header background={background}/>
      <Style.MoviesListSection>
        <Style.TitleContainer>
          <FontAwesomeIcon icon={faFire} />
          <Style.H2>Discover</Style.H2>
          <RatingFilter />
        </Style.TitleContainer>
        <Style.MoviesListContainer>
          {movies.length > 0 &&
            movies.map((movie: MovieModel, index: number) => (
              <Link to={`/movie/${movie.id}`} key={movie.id}>
                <MovieCard
                  movie={movie}
                  size={index > 0 ? MovieCardSize.small : MovieCardSize.big}
                />
              </Link>
            ))}
          {movies.length === 0 && (
            <Style.NoMoviesParagraph>
              No movies available!
            </Style.NoMoviesParagraph>
          )}
        </Style.MoviesListContainer>
      </Style.MoviesListSection>
    </>
  );
}
