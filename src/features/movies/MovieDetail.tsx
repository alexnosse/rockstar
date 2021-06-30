import React, { useCallback } from 'react';
import { useParams, Redirect } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarLight } from '@fortawesome/free-regular-svg-icons';

import { useAppSelector } from '../../app/hooks';
import { MovieModel } from '../../model/MovieModel';
import { selectMovieById } from './moviesSlice';
import Style from './MovieDetail.style';

export interface MovieDetailProps {
  movieId: string;
}

export function MovieDetail() {
  const { movieId } = useParams<MovieDetailProps>();
  const movie: MovieModel = useAppSelector((state) =>
    selectMovieById(state, parseInt(movieId, 10)),
  );

  const renderRating = useCallback(() => {
    if (movie) {
      const rating = parseInt(`${movie.vote_average}`, 10);
      let render = [];
      let counter = 0;
      while (counter < rating) {
        render.push(faStar);
        counter += 2;
      }
      while (counter < 10) {
        render.push(faStarLight);
        counter += 2;
      }

      return render.map((icon, index) => (
        <FontAwesomeIcon icon={icon} key={index} />
      ));
    }
  }, [movie]);

  if (!movie) {
    return <Redirect to="/" />;
  }

  return (
    <Style.MovieDetailWrapper>
      <Style.MovieDetailContainer>
        <img src={movie.poster_path} />
        <Style.MovieDetailsText>
          <h3>{movie.title}</h3>
          <Style.RatingContainer>
            <p>Rating: </p>
            {renderRating()}
          </Style.RatingContainer>
          <p>Release date: {movie.release_date}</p>
          <p>{movie.overview}</p>
        </Style.MovieDetailsText>
      </Style.MovieDetailContainer>
    </Style.MovieDetailWrapper>
  );
}
