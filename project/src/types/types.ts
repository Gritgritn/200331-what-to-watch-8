import { ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AuthorizationStatus, FetchStatus } from '../constants';
import {
  setAuthorizationStatus,
  setFilms,
  setFilmsFetchStatus,
  setFilter,
  setPromoFilm,
  setPromoFetchStatus,
  setAuthorizationInfo,
  setFavoriteFilms,
  setFavoriteFilmsFetchStatus,
  redirectToRoute,
  setCurrentComments,
  setCurrentCommentsFetchStatus,
  setCurrentFilm,
  setCurrentFilmFetchStatus
} from '../store/actions';

type User = {
  email: string,
  password: string,
}

type ServerAuthInfo = {
  id: 1,
  email: string,
  name: string,
  'avatar_url': string,
  token: Token,
}

type Token = string;

type ServerFilm = {
  id: number,
  name: string,
  'poster_image': string,
  'preview_image': string,
  'background_image': string,
  'background_color': string,
  'video_link': string,
  'preview_video_link': string,
  description: string,
  rating: number,
  'scores_count': number,
  director: string,
  starring: string[],
  'run_time': number,
  genre: string,
  released: number,
  'is_favorite': boolean
}

type FetchStatusType = ValuesOf<typeof FetchStatus>

type FetchedData<T = any> = {
  data: T | null,
  status: FetchStatusType,
}

type AuthoarizationInfo  = {
  id: 1,
  email: string,
  name: string,
  avatarUrl: string,
  token: Token,
}

type State = {
  films: FetchedData<Film[]>,
  promoFilm: FetchedData<Film>,
  currentFilm: FetchedData<Film>,
  currentComments: FetchedData<Comment[]>,
  similarFilms: FetchedData<Film[]>,
  favoriteFilms: FetchedData<Film[]>,
  filter: string,
  authorization: {
    status:  ValuesOf<typeof AuthorizationStatus>,
    info: AuthoarizationInfo | null
  }
}

type Action = ReturnType<typeof setAuthorizationStatus>
  | ReturnType<typeof setAuthorizationInfo>
  | ReturnType<typeof setFilms>
  | ReturnType<typeof setFilmsFetchStatus>
  | ReturnType<typeof setFavoriteFilms>
  | ReturnType<typeof setCurrentComments>
  | ReturnType<typeof setCurrentCommentsFetchStatus>
  | ReturnType<typeof setFavoriteFilmsFetchStatus>
  | ReturnType<typeof setCurrentFilm>
  | ReturnType<typeof setCurrentFilmFetchStatus>
  | ReturnType<typeof setPromoFilm>
  | ReturnType<typeof setPromoFetchStatus>
  | ReturnType<typeof setFilter>
  | ReturnType<typeof redirectToRoute>;

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;

type Film = {
    id: number,
    name: string,
    posterImage: string,
    previewImage: string,
    backgroundImage: string,
    backgroundColor: string,
    videoLink: string,
    previewVideoLink: string,
    description: string,
    rating: number,
    scoresCount: number,
    director: string,
    actors: string[],
    runTime: number,
    genre: string,
    released: number,
  isFavorite: boolean,
}

type CommentCreatePayload = {
  rating: number,
  comment: string,
}

type Comment = CommentCreatePayload & {
  id: number,
  user: {
    id: number,
    name: string,
  },
  date: Date,
}

type ParamsWithId = {
  id: string
}

type ValuesOf<T> = T[keyof T]

export type { CommentCreatePayload, User, Token, ServerAuthInfo, FetchStatusType, ThunkAppDispatch, ThunkActionResult, FetchedData, ServerFilm, AuthoarizationInfo, State, Action, ParamsWithId, Comment, Film, ValuesOf};
