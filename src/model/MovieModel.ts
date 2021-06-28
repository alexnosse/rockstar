
export enum MovieCardSize {
  small = 'SMALL',
  big = 'BIG',
};

export type MovieModel = {
  id: number;
  name: string;
  voting_average: number;
  poster_path?: string;
};