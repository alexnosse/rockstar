
export enum MovieCardSize {
  small = 'SMALL',
  big = 'BIG',
};

export type MovieModel = {
  id: number;
  title: string;
  vote_average: number;
  poster_path?: string;
  overview: string;
  release_date: string;
  backdrop_path?: string;
};