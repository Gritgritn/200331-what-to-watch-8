import { generatePath } from 'react-router';
import { FavoriteStatusType } from './types/types';

const MAX_GENRES_COUNT = 9;

const ALL_GENRES = 'All genres';

const CATALOG_INITIAL_PAGE = 1;

const CATALOG_PAGE_SIZE = 8;

const MAX_SIMILAR_FILMS_COUNT = 4;

const NUMERIC_REGEX = /\d/;

const LATIN_REGEX = /[A-za-z]/;

const AUTH_TOKEN_KEY_NAME = 'wtw-token';

const MIN_PASSWORD_LENGTH = 2;

const EMPTY_SPACE = ' ';

const MAX_OVERVIEW_ACTORS_COUNT = 4;

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const AppRoute = {
  Root: () => '/',
  Login: () => '/login',
  MyList: () => '/mylist',
  Film: (id:string | number = ':id') => generatePath('/films/:id', { id: id}),
  AddReview: (id:string | number = ':id') => generatePath('/films/:id/review', { id: id}),
  Player: (id:string | number = ':id') => generatePath('/player/:id', { id: id}),
} as const;

const FavoriteStatus = {
  Favorite: 1,
  NotFavorite: 0,
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
  SetAllFilms: 'allFilms/setData',
  SetAllFilmsFetchStatus: 'allFilms/setFetchStatus',
  SetPromoFilm: 'promoFilm/setData',
  SetPromoFilmFetchStatus: 'promoFilm/setFetchStatus',
  SetFavoriteFilms: 'favoriteFilms/setData',
  SetFavoriteFilmsFetchStatus: 'favoriteFilms/setFetchStatus',
  SetSimilarFilms: 'similarFilms/setData',
  SetSimilarFilmsFetchStatus: 'similarFilms/setFetchStatus',
  SetCurrentFilm: 'currentFilm/setData',
  SetCurrentFilmFetchStatus: 'currentFilm/setFetchStatus',
  SetAuthorizationError: 'authorization/setError',
  SetCurrentComments: 'currentComments/setData',
  SetCurrentCommentsFetchStatus: 'currentComments/setFetchStatus',
  SetNewCommentFetchStatus: 'newComment/setFetchStatus',
  Redirect: 'app/redirect',
} as const;

const APIRoute = {
  Films: () => '/films',
  PromoFilm: () => '/promo',
  Film: (id:string | number) => `/films/${id}`,
  SimilarFilms: (id:string | number) => `/films/${id}/similar`,
  FavoriteFilms: () => '/favorite',
  FavoriteFilm: (id:string | number, newStatus: FavoriteStatusType) => `/favorite/${id}/${newStatus}`,
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

const Rating = {
  MinValue: 1,
  MaxValue: 10,
} as const;

const ReviewContent = {
  MinLength: 50,
  MaxLength: 400,
} as const;

export { MAX_OVERVIEW_ACTORS_COUNT, FavoriteStatus, Rating, ReviewContent, AUTH_TOKEN_KEY_NAME, MIN_PASSWORD_LENGTH, EMPTY_SPACE, EMAIL_REGEX, APIRoute, FetchStatus, MAX_SIMILAR_FILMS_COUNT, CATALOG_INITIAL_PAGE, CATALOG_PAGE_SIZE, MAX_GENRES_COUNT, ALL_GENRES, ActionType, FilmCardBackgroundSize, AppRoute, AuthorizationStatus, FilmCardTab, ratingDescriptionToLowerLimit, RatingDescription, CustomRouteType, NUMERIC_REGEX, LATIN_REGEX };
