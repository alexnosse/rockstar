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

  const [isOpen, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  const onOpen = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  const setRatingOnClick = useCallback(
    (newRating: number) => {
      setTempRating(newRating === tempRating ? 0 : newRating);
    },
    [tempRating],
  );

  const onConfirmFilter = useCallback(() => {
    setRating(tempRating);
    dispatch(ratingChanged({ rating: tempRating }));
    setOpen(false);
  }, [tempRating, dispatch]);

  const onCancelFilter = useCallback(() => {
    setTempRating(rating);
    setOpen(false);
  }, [rating]);

  return (
    <>
      <Style.RatingContainer onClick={() => (!isOpen ? onOpen() : undefined)}>
        <p>Filter</p>
        <FontAwesomeIcon icon={!isOpen ? faCaretDown : faCaretUp} />
        <Style.StarsContainer visible={isOpen}>
          {possibleRatings.map((possibleRating) => (
            <FontAwesomeIcon
              icon={tempRating >= possibleRating ? faStar : faStarLight}
              onClick={() => setRatingOnClick(possibleRating)}
              key={possibleRating}
            />
          ))}
          <Style.ApplyFilterButton onClick={onConfirmFilter} visible={isOpen}>
            Apply filter
          </Style.ApplyFilterButton>
        </Style.StarsContainer>
      </Style.RatingContainer>
      <Style.RatingBackdrop
        visible={isOpen}
        onClick={onCancelFilter}
      ></Style.RatingBackdrop>
    </>
  );
}
