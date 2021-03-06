import { createSelector } from 'reselect';
import { MAX_GENRES_COUNT, ALL_GENRES } from '../constants';
import { State } from '../types/types';

const getFilms = ({ films }: State) => films.allFilms.data;

const getFiter = ({ filter }: State) => filter;

const getGenres = createSelector(
  [ getFilms ],
  (films) => {
    if (!films) {
      return [];
    }
    const genres = new Set<string>();
    films.forEach((film) => genres.add(film.genre));

    return [ALL_GENRES, ...Array.from(genres).slice(0, MAX_GENRES_COUNT)];
  },
);

const getFilteredFilms = createSelector(
  [ getFilms, getFiter ],
  (films, filter) => {
    if (!films) {
      return [];
    }
    if (!filter || filter === ALL_GENRES) {
      return [ ...films];
    }

    return films.filter((film) => film.genre === filter);
  },
);

export { getGenres, getFilteredFilms };
