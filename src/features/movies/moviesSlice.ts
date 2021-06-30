import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { client } from '../../client/client';
import { MovieModel } from '../../model/MovieModel';

export const fetchAllMovies = createAsyncThunk<MovieModel[]>(
  'movies/fetchMovies',
  async () => {
    const response = await client.get('discover/movie');
    return response.results.map((movie: MovieModel) =>
      parseMovieToFrontend(movie),
    );
  },
);

export const searchMovies = createAsyncThunk<MovieModel[], string>(
  'movies/searchMovies',
  async (query) => {
    const response = await client.get(`search/movie?query=${query}`);
    return response.results.map((movie: MovieModel) =>
      parseMovieToFrontend(movie),
    );
  },
);

enum MovieStateStatus {
  IDLE = 'idle',
  SUCCEEDED = 'succeeded',
  PENDING = 'pending',
  LOADING = 'loading',
  FAILED = 'failed',
}

export interface MovieState {
  items: MovieModel[];
  status: MovieStateStatus;
  rating: number;
  error: any;
}

const initialState: MovieState = {
  items: [],
  status: MovieStateStatus.IDLE,
  rating: 0,
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    clearMovies(state) {
      state.items = [];
    },
    ratingChanged(state, action) {
      const { rating } = action.payload;
      state.rating = rating;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllMovies.pending, (state, action) => {
      state.status = MovieStateStatus.LOADING;
    });
    builder.addCase(fetchAllMovies.fulfilled, (state, action: any) => {
      state.status = MovieStateStatus.SUCCEEDED;
      state.items = state.items.concat(action.payload);
    });
    builder.addCase(fetchAllMovies.rejected, (state, action: any) => {
      state.status = MovieStateStatus.FAILED;
      state.error = action.payload;
    });
    builder.addCase(searchMovies.pending, (state, action) => {
      state.status = MovieStateStatus.LOADING;
    });
    builder.addCase(searchMovies.fulfilled, (state, action: any) => {
      state.status = MovieStateStatus.SUCCEEDED;
      state.items = action.payload;
    });
    builder.addCase(searchMovies.rejected, (state, action: any) => {
      state.status = MovieStateStatus.FAILED;
      state.error = action.payload;
    });
  },
});

export const { ratingChanged, clearMovies } = moviesSlice.actions;

export default moviesSlice.reducer;

export const selectAllMovies = (state: any) => state.movies.items;

export const selectLandingPageMovies = (state: any) => {
  let landingPageMovies = [...state.movies.items];

  const { rating } = state.movies;
  if (rating > 0) {
    landingPageMovies = landingPageMovies.filter(
      (movie: MovieModel) =>
        movie.vote_average >= rating - 2 && movie.vote_average <= rating,
    );
  }
  // If there`s more items here, we just want to show the 9
  // first items there
  if (landingPageMovies.length > 9) {
    landingPageMovies.length = 9;
  }

  return landingPageMovies;
};

export const selectMovieById = (state: any, id: number) =>
  state.movies.items.find((movie: MovieModel) => movie.id === id);

const parseMovieToFrontend = (movie: MovieModel) => {
  return {
    ...movie,
    poster_path: movie.poster_path
      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
      : undefined,
    backdrop_path: movie.backdrop_path
      ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
      : undefined,
  } as MovieModel;
};
