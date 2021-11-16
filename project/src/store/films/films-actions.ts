import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../../constants';
import { FetchStatusType, Film } from '../../types/types';

const setAllFilms = createAction(ActionType.SetAllFilms, (allFilms: Film[] | null) => ({
  payload: {
    allFilms,
  },
}));

const setAllFilmsFetchStatus = createAction(ActionType.SetAllFilmsFetchStatus, (status: FetchStatusType) => ({
  payload: {
    status,
  },
}));

const setPromoFilm = createAction(ActionType.SetPromoFilm, (promoFilm: Film | null) => ({
  payload: {
    promoFilm,
  },
}));

const setPromoFilmFetchStatus = createAction(ActionType.SetPromoFilmFetchStatus, (status: FetchStatusType) => ({
  payload: {
    status,
  },
}));

const setFavoriteFilms = createAction(ActionType.SetFavoriteFilms, (favoriteFilms: Film[] | null) => ({
  payload: {
    favoriteFilms,
  },
}));

const setFavoriteFilmsFetchStatus = createAction(ActionType.SetFavoriteFilmsFetchStatus, (status: FetchStatusType) => ({
  payload: {
    status,
  },
}));

const setSimilarFilms = createAction(ActionType.SetSimilarFilms, (similarFilms: Film[] | null) => ({
  payload: {
    similarFilms,
  },
}));

const setSimilarFilmsFetchStatus = createAction(ActionType.SetSimilarFilmsFetchStatus, (status: FetchStatusType) => ({
  payload: {
    status,
  },
}));

const setCurrentFilm = createAction(ActionType.SetCurrentFilm, (currentFilm: Film | null) => ({
  payload: {
    currentFilm,
  },
}));

const setCurrentFilmFetchStatus = createAction(ActionType.SetCurrentFilmFetchStatus, (status: FetchStatusType) => ({
  payload: {
    status,
  },
}));

export { setAllFilms, setAllFilmsFetchStatus, setPromoFilm, setPromoFilmFetchStatus, setFavoriteFilms, setCurrentFilmFetchStatus, setCurrentFilm, setSimilarFilmsFetchStatus, setSimilarFilms, setFavoriteFilmsFetchStatus };
