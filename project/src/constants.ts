import { generatePath } from 'react-router';

const AppRoute = {
  Root: () => '/',
  Login: () => '/login',
  MyList: () => '/mylist',
  Film: (id:string | number = ':id') => generatePath('/films/:id', { id: id}),
  AddReview: (id:string | number = ':id') => generatePath('/films/:id/review', { id: id}),
  Player: (id:string | number = ':id') => generatePath('/player/:id', { id: id}),
} as const;

const FilmCardBackgroundSize = {
  Big: 'BIG',
  Small: 'SMALL',
} as const;

const AuthorizationStatus = {
  Auth: 'AUTH',
  NotAuth: 'NOT_AUTH',
  Unknown: 'UNKNOWN',
} as const;

const FilmCardTab = {
  Overview: 'overview',
  Details: 'details',
  Reviews: 'reviews',
} as const;

const RatingDescription = {
  Bad: 'Bad',
  Normal: 'Normal',
  Good: 'Good',
  VeryGood: 'Very Good',
  Awesome: 'Awesome',
} as const;

const ratingDescriptionToLowerLimit: {
  [key in keyof typeof RatingDescription]: number
} = {
  Bad: 0,
  Normal: 3,
  Good: 5,
  VeryGood: 8,
  Awesome: 10,
};

const CustomRouteType = {
  Guest: 'GUEST',
  Private: 'PRIVATE',
} as const;

const ActionType = {
  SetFilter: 'filter/setFilter',
  SetAuthorizationStatus: 'authorization/setStatus',
  SetAuthorizationInfo: 'authorization/setInfo',
  SetFilms: 'films/setData',
  SetFilmsFetchStatus: 'films/setFetchStatus',
  SetPromoFilm: 'promoFilm/setData',
  SetPromoFilmFetchStatus: 'promoFilm/setFetchStatus',
  SetFavoriteFilms: 'favoriteFilms/setData',
  SetFavoriteFilmsFetchStatus: 'favoriteFilms/setFetchStatus',
  ResetFavoriteFilms: 'favoriteFilms/reset',
  SetCurrentComments: 'currentComments/setData',
  SetCurrentCommentsFetchStatus: 'currentComments/setFetchStatus',
  Redirect: 'app/redirect',
} as const;

const MAX_GENRES_COUNT = 9;

const ALL_GENRES = 'All genres';

const CATALOG_INITIAL_PAGE = 1;

const CATALOG_PAGE_SIZE = 8;

const MAX_SIMILAR_FILMS_COUNT = 4;

const APIRoute = {
  Films: () => '/films',
  PromoFilm: () => '/promo',
  Film: (id:string | number) => `/films/${id}`,
  SimilarFilms: (id:string | number) => `/films/${id}/similar`,
  FavoriteFilms: () => '/favorite',
  Comments: (id:string | number) => `/comments/${id}`,
  Login: () => '/login',
  Logout: () => '/logout',
} as const;

const FetchStatus = {
  Idle: 'IDLE',
  Loading: 'LOADING',
  Succeeded: 'SUCCEEDED',
  Failed: 'FAILED',
} as const;

const AUTH_TOKEN_KEY_NAME = 'wtw-token';

const MIN_PASSWORD_LENGTH = 2;

const EMPTY_SPACE = ' ';

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export {AUTH_TOKEN_KEY_NAME, MIN_PASSWORD_LENGTH, EMPTY_SPACE, EMAIL_REGEX, APIRoute, FetchStatus, MAX_SIMILAR_FILMS_COUNT, CATALOG_INITIAL_PAGE, CATALOG_PAGE_SIZE, MAX_GENRES_COUNT, ALL_GENRES, ActionType, FilmCardBackgroundSize, AppRoute, AuthorizationStatus, FilmCardTab, ratingDescriptionToLowerLimit, RatingDescription, CustomRouteType};
