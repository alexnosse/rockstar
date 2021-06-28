import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { client } from '../../client/client';
import { MovieModel } from '../../model/MovieModel';

export const fetchAllMovies = createAsyncThunk<MovieModel[]>(
  'movies/fetchMovies',
  async () => {
    const response = await client.get('discover/movie');
    return response.results;
  },
);

export const searchMovies = createAsyncThunk<MovieModel[], string>(
  'movies/searchMovies',
  async (query) => {
    const response = await client.get(`search/movie?query=${query}`);
    return response.results;
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
  searchedString: string;
  error: any;
}

const initialState: MovieState = {
  items: [],
  status: MovieStateStatus.IDLE,
  searchedString: '',
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
      const { id, reaction } = action.payload;
      // const existingPost = state.items.find((movie) => movie.id === id);
      // TODO create rating logic here
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllMovies.pending, (state, action) => {
      state.status = MovieStateStatus.LOADING;
      console.log('[BUG] fetchMovies.pending action', action);
    });
    builder.addCase(fetchAllMovies.fulfilled, (state, action: any) => {
      state.status = MovieStateStatus.SUCCEEDED;
      console.log('[BUG] fetchMovies.fulfilled action', action);
      console.log('[BUG] fetchMovies.fulfilled state', state.items);
      state.items = state.items.concat(action.payload);
    });
    builder.addCase(fetchAllMovies.rejected, (state, action: any) => {
      state.status = MovieStateStatus.FAILED;
      console.log('[BUG] fetchMovies.rejected action', action);
      state.error = action.payload;
    });
    builder.addCase(searchMovies.pending, (state, action) => {
      state.status = MovieStateStatus.LOADING;
      console.log('[BUG] searchMovies.pending action', action);
    });
    builder.addCase(searchMovies.fulfilled, (state, action: any) => {
      state.status = MovieStateStatus.SUCCEEDED;
      console.log('[BUG] searchMovies.fulfilled action', action);
      console.log('[BUG] searchMovies.fulfilled state', state.items);
      state.items = action.payload;
    });
    builder.addCase(searchMovies.rejected, (state, action: any) => {
      state.status = MovieStateStatus.FAILED;
      console.log('[BUG] searchMovies.rejected action', action);
      state.error = action.payload;
    });
  },
});

export const { ratingChanged, clearMovies } = moviesSlice.actions;

export default moviesSlice.reducer;

export const selectAllMovies = (state: any) => state.movies.items;

export const getHighlightedMovie = (state: any) =>
  [...state.movies.items].shift();

export const selectLandingPageMovies = (state: any) => {
  const landingPageMovies = [...state.movies.items].slice(1);
  landingPageMovies.length = 8;
  return landingPageMovies;
};

export const selectMovieById = (state: any, id: number) =>
  state.movies.items.find((movie: MovieModel) => movie.id === id);
