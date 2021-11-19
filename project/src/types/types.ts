import { ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FetchStatus, FavoriteStatus } from '../constants';
import { redirectToRoute } from '../store/app/app-actions';
import { setAuthorizationErrorMessage, setAuthorizationStatus, setAuthorizationInfo } from '../store/authorization/authorization-actions';
import { setCurrentComments, setCurrentCommentsFetchStatus, setNewCommentFetchStatus } from '../store/comments/comments-actions';
import { setSimilarFilms, setSimilarFilmsFetchStatus, setFavoriteFilms, setFavoriteFilmsFetchStatus, setCurrentFilm, setCurrentFilmFetchStatus, setPromoFilm, setPromoFilmFetchStatus, setAllFilms, setAllFilmsFetchStatus } from '../store/films/films-actions';
import { setFilter } from '../store/filter/filter-actions';
import { rootReducer } from '../store/root-reducer';

type Login = {
  email: string;
  password: string;
};

type ServerAuthorizationInfo = {
  'id': number;
  'email': string;
  'name': string;
  'avatar_url': string;
  'token': Token;
};

type Token = string;

type ServerFilm = {
  id: number;
  name: string;
  'poster_image': string;
  'preview_image': string;
  'background_image': string;
  'background_color': string;
  'video_link': string;
  'preview_video_link': string;
  description: string;
  rating: number;
  'scores_count': number;
  director: string;
  starring: string[];
  'run_time': number;
  genre: string;
  released: number;
  'is_favorite': boolean;
};

type FetchStatusType = ValuesOf<typeof FetchStatus>

type FetchedData<T = any> = {
  data: T | null;
  status: FetchStatusType;
};

type AuthorizationInfo  = {
  id: number;
  email: string;
  name: string;
  avatarUrl: string;
  token: Token;
};

type State = ReturnType<typeof rootReducer>;

type Action = ReturnType<typeof setAuthorizationStatus>
  | ReturnType<typeof setAuthorizationInfo>
  | ReturnType<typeof setAuthorizationErrorMessage>
  | ReturnType<typeof setAllFilms>
  | ReturnType<typeof setAllFilmsFetchStatus>
  | ReturnType<typeof setFavoriteFilms>
  | ReturnType<typeof setCurrentComments>
  | ReturnType<typeof setCurrentCommentsFetchStatus>
  | ReturnType<typeof setFavoriteFilmsFetchStatus>
  | ReturnType<typeof setSimilarFilms>
  | ReturnType<typeof setSimilarFilmsFetchStatus>
  | ReturnType<typeof setCurrentFilm>
  | ReturnType<typeof setCurrentFilmFetchStatus>
  | ReturnType<typeof setPromoFilm>
  | ReturnType<typeof setPromoFilmFetchStatus>
  | ReturnType<typeof setFilter>
  | ReturnType<typeof setNewCommentFetchStatus>
  | ReturnType<typeof redirectToRoute>;

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;

type Film = {
    id: number;
    name: string;
    posterImage: string;
    previewImage: string;
    backgroundImage: string;
    backgroundColor: string;
    videoLink: string;
    previewVideoLink: string;
    description: string;
    rating: number;
    scoresCount: number;
    director: string;
    actors: string[];
    runTime: number;
    genre: string;
    released: number;
  isFavorite: boolean;
};

type CommentPost  = {
  rating: number;
  comment: string;
};

type Comment = CommentPost  & {
  id: number;
  user: {
    id: number;
    name: string;
  },
  date: Date;
};

type ParamsWithId = {
  id: string;
};

type ValuesOf<T> = T[keyof T];

type FavoriteStatusType = ValuesOf<typeof FavoriteStatus>;

type ServerCommentGet = CommentPost & {
  id: number;
  user: {
    id: number;
    name: string;
  };
  date: string;
};

export type { ServerCommentGet, FavoriteStatusType, CommentPost, Login, Token, ServerAuthorizationInfo, FetchStatusType, ThunkAppDispatch, ThunkActionResult, FetchedData, ServerFilm, AuthorizationInfo, State, Action, ParamsWithId, Comment, Film, ValuesOf};
