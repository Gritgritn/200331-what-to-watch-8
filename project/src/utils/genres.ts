import type { Film } from '../types/types';

const MAX_GENRES_COUNT = 9;

const ALL_GENRES = 'All genres';

const getGenresList = (films: Film[]): string[] => {
  const genres = new Set<string>();
  films.forEach((film) => genres.add(film.genre));

  return [ALL_GENRES, ...Array.from(genres).slice(0, MAX_GENRES_COUNT)];
};

export {ALL_GENRES, getGenresList};
