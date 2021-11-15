import { createSelector } from 'reselect';
import { ALL_GENRES } from '../../constants';
import { FetchStatusType, Film, State } from '../../types/types';
import { getFilter } from '../filter/filter-selectors';

const getAllFilmsData = ({ films }: State): Film[] | null => films.allFilms.data;

const getPromoFilmData = ({ films }: State): Film | null => films.promoFilm.data;

const getSimilarFilmsData = ({ films }: State): Film[] | null => films.similarFilms.data;

const getFavoriteFilmsData = ({ films }: State): Film[] | null => films.favoriteFilms.data;

const getCurrentFilmData = ({ films }: State): Film | null => films.currentFilm.data;

const getAllFilmsStatus = ({ films }: State): FetchStatusType => films.allFilms.status;

const getPromoFilmStatus = ({ films }: State): FetchStatusType => films.promoFilm.status;

const getSimilarFilmsStatus = ({ films }: State): FetchStatusType => films.similarFilms.status;

const getFavoriteFilmsStatus = ({ films }: State): FetchStatusType => films.favoriteFilms.status;

const getCurrentFilmStatus = ({ films }: State): FetchStatusType => films.currentFilm.status;

const getFilteredFilms = createSelector(
  [ getAllFilmsData, getFilter ],
  (films, filter)=> {
    if (!films) {
      return [];
    }

    if (!filter || filter === ALL_GENRES) {
      return [ ...films];
    }

    return films.filter((film) => film.genre === filter);
  },
);

export { getFilteredFilms, getSimilarFilmsStatus, getFavoriteFilmsStatus, getCurrentFilmStatus, getAllFilmsData, getPromoFilmData, getSimilarFilmsData, getFavoriteFilmsData, getCurrentFilmData, getAllFilmsStatus, getPromoFilmStatus };
