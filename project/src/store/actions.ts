import { ActionType, AuthorizationStatus } from '../constants';
import { Comment, AuthoarizationInfo, FetchStatusType, Film, ValuesOf } from '../types/types';

const setFilms = (films: Film[] | null) => ({
  type: ActionType.SetFilms,
  payload: {
    films,
  },
} as const);

const setFilmsFetchStatus = (status: FetchStatusType) => ({
  type: ActionType.SetFilmsFetchStatus,
  payload: {
    status,
  },
} as const);


const setPromoFilm = (promoFilm: Film | null) => ({
  type: ActionType.SetPromoFilm,
  payload: {
    promoFilm,
  },
} as const);

const setPromoFetchStatus = (status: FetchStatusType) => ({
  type: ActionType.SetPromoFilmFetchStatus,
  payload: {
    status,
  },
} as const);

const setAuthorizationStatus = (status: ValuesOf<typeof AuthorizationStatus>) => ({
  type: ActionType.SetAuthorizationStatus,
  payload: {
    status,
  },
} as const);

const setAuthorizationInfo = (info: AuthoarizationInfo | null) => ({
  type: ActionType.SetAuthorizationInfo,
  payload: {
    info,
  },
} as const);

const setFilter = (filter: string) => ({
  type: ActionType.SetFilter,
  payload: {
    filter,
  },
} as const);

const setFavoriteFilmsFetchStatus = (status: FetchStatusType) => ({
  type: ActionType.SetFavoriteFilmsFetchStatus,
  payload: {
    status,
  },
} as const);

const setSimilarFilms = (similarFilms: Film[] | null) => ({
  type: ActionType.SetSimilarFilms,
  payload: {
    similarFilms,
  },
} as const);

const redirectToRoute = (route: string) => ({
  type: ActionType.Redirect,
  payload: {
    route,
  },
} as const);

const setCurrentComments = (currentComments: Comment[] | null) => ({
  type: ActionType.SetCurrentComments,
  payload: {
    currentComments,
  },
} as const);

const setCurrentCommentsFetchStatus = (status: FetchStatusType) => ({
  type: ActionType.SetCurrentCommentsFetchStatus,
  payload: {
    status,
  },
} as const);

const setCurrentFilm = (currentFilm: Film | null) => ({
  type: ActionType.SetCurrentFilm,
  payload: {
    currentFilm,
  },
} as const);

const setCurrentFilmFetchStatus = (status: FetchStatusType) => ({
  type: ActionType.SetCurrentFilmFetchStatus,
  payload: {
    status,
  },
} as const);

const setFavoriteFilms = (favoriteFilms: Film[] | null) => ({
  type: ActionType.SetFavoriteFilms,
  payload: {
    favoriteFilms,
  },
} as const);

const setSimilarFilmsFetchStatus = (status: FetchStatusType) => ({
  type: ActionType.SetSimilarFilmsFetchStatus,
  payload: {
    status,
  },
} as const);

export { setSimilarFilmsFetchStatus, setSimilarFilms, setCurrentFilm, setCurrentFilmFetchStatus, setCurrentComments, setCurrentCommentsFetchStatus, redirectToRoute, setFavoriteFilmsFetchStatus, setFavoriteFilms, setFilms, setFilmsFetchStatus, setPromoFilm, setPromoFetchStatus, setAuthorizationStatus, setAuthorizationInfo, setFilter };
