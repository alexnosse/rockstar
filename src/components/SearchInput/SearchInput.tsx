import React, { useCallback, useState } from 'react';
import _ from 'lodash';

import Style from './SearchInput.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { useAppDispatch } from '../../app/hooks';
import {
  clearMovies,
  fetchAllMovies,
  searchMovies,
} from '../../features/movies/moviesSlice';

export function SearchInput() {
  const [userQuery, setUserQuery] = useState('');
  const dispatch = useAppDispatch();

  const delayedQuery = useCallback(
    _.debounce(async (query: string) => {
      if (!query) {
        dispatch(clearMovies());
        dispatch(fetchAllMovies());
        return;
      }
      dispatch(searchMovies(query));
    }, 500),
    [],
  );

  const onChange = (e: any) => {
    setUserQuery(e.target.value);
    delayedQuery(e.target.value);
  };

  return (
    <Style.SearchInputContainer>
      <FontAwesomeIcon icon={faSearch} fill="#fff" />
      <Style.SearchInput
        onChange={onChange}
        value={userQuery}
        placeholder="Search for a movie..."
      />
    </Style.SearchInputContainer>
  );
}
