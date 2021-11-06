import { ActionType, AuthorizationStatus } from '../constants';
import { AuthoarizationInfo, FetchStatusType, Film, ValuesOf } from '../types/types';

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

export { setFilms, setFilmsFetchStatus, setPromoFilm, setPromoFetchStatus, setAuthorizationStatus, setAuthorizationInfo, setFilter };
