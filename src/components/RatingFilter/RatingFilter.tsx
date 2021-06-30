import React, { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faCaretUp,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarLight } from '@fortawesome/free-regular-svg-icons';

import Style from './RatingFilter.style';
import { useAppDispatch } from '../../app/hooks';
import { ratingChanged } from '../../features/movies/moviesSlice';

const possibleRatings = [2, 4, 6, 8, 10];
export function RatingFilter() {
  const dispatch = useAppDispatch();

  const [rating, setRating] = useState(0);

  const setRatingOnClick = useCallback(
    (newRating: number) => {
      const updatedRating = newRating === rating ? 0 : newRating;
      setRating(updatedRating);
      dispatch(ratingChanged({ rating: updatedRating }));
    },
    [rating],
  );

  return (
    <Style.RatingContainer>
      <p>Filter by Rating:</p>
      <Style.StarsContainer>
        {possibleRatings.map((possibleRating) => (
          <FontAwesomeIcon
            icon={rating >= possibleRating ? faStar : faStarLight}
            onClick={() => setRatingOnClick(possibleRating)}
            key={possibleRating}
          />
        ))}
      </Style.StarsContainer>
    </Style.RatingContainer>
  );
}
