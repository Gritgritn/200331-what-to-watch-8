import { APIRoute, AppRoute, AuthorizationStatus, FetchStatus } from '../constants';
import { adaptAuthorizationInfoToClient, adaptFilmToClient } from '../services/adapters';
import { CommentPost, Comment, ServerAuthInfo, ServerFilm, ThunkActionResult, User } from '../types/types';
import { setNewCommentFetchStatus, setFilms, setFilmsFetchStatus, setPromoFilm, setPromoFetchStatus, setAuthorizationInfo, setAuthorizationStatus, setFavoriteFilms, setFavoriteFilmsFetchStatus, redirectToRoute, setCurrentCommentsFetchStatus, setCurrentComments, setCurrentFilmFetchStatus, setCurrentFilm, setSimilarFilmsFetchStatus, setSimilarFilms } from './actions';
import toast from 'react-hot-toast';
import { dropToken, saveToken } from '../services/token';

const postComment = (filmId: number, formData: CommentPost): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setNewCommentFetchStatus(FetchStatus.Loading));

    try {
      const { data: comments } = await api.post<Comment[]>(APIRoute.Comments(filmId), formData);

      dispatch(setCurrentComments(comments));
      dispatch(setNewCommentFetchStatus(FetchStatus.Succeeded));
      dispatch(setCurrentCommentsFetchStatus(FetchStatus.Succeeded));
      dispatch(redirectToRoute(AppRoute.Film(filmId)));

    } catch (error) {
      toast.error('Failed to add review');
      dispatch(setNewCommentFetchStatus(FetchStatus.Failed));
    }
  };

const getSimilarFilms = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setSimilarFilmsFetchStatus(FetchStatus.Loading));

    try {
      const { data: serverFilms } = await api.get<ServerFilm[]>(APIRoute.SimilarFilms(id));
      const similarFilms = serverFilms.map((serverFilm) => adaptFilmToClient(serverFilm));

      dispatch(setSimilarFilms(similarFilms));
      dispatch(setSimilarFilmsFetchStatus(FetchStatus.Succeeded));

    } catch (error) {
      dispatch(setSimilarFilmsFetchStatus(FetchStatus.Failed));
    }
  };

const getСurrentFilm = (filmId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setCurrentFilmFetchStatus(FetchStatus.Loading));

    try {
      const { data: serverFilm } = await api.get<ServerFilm>(APIRoute.Film(filmId));
      const currentFilm = adaptFilmToClient(serverFilm);

      dispatch(setCurrentFilm(currentFilm));
      dispatch(setCurrentFilmFetchStatus(FetchStatus.Succeeded));

    } catch (error) {
      dispatch(setCurrentFilmFetchStatus(FetchStatus.Failed));
    }
  };

const getFilms = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setFilmsFetchStatus(FetchStatus.Loading));

    try {
      const { data: serverFilms } = await api.get<ServerFilm[]>(APIRoute.Films());
      const films = serverFilms.map((serverFilm) => adaptFilmToClient(serverFilm));

      dispatch(setFilms(films));
      dispatch(setFilmsFetchStatus(FetchStatus.Succeeded));

    } catch (error) {
      dispatch(setFilmsFetchStatus(FetchStatus.Failed));
    }
  };

const getPromoFilm = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setPromoFetchStatus(FetchStatus.Loading));

    try {
      const { data: serverPromoFilm } = await api.get<ServerFilm>(APIRoute.PromoFilm());
      const promoFilm = adaptFilmToClient(serverPromoFilm);

      dispatch(setPromoFilm(promoFilm));
      dispatch(setPromoFetchStatus(FetchStatus.Succeeded));

    } catch (error) {
      dispatch(setPromoFetchStatus(FetchStatus.Failed));
    }
  };

const getLogin = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data: serverAuthorizationInfo } =
        await api.get<ServerAuthInfo>(APIRoute.Login());

      const authorizationInfo = adaptAuthorizationInfoToClient(serverAuthorizationInfo);

      dispatch(setAuthorizationInfo(authorizationInfo));
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dropToken();
      dispatch(setAuthorizationStatus(AuthorizationStatus.NotAuth));
    }
  };

const postLogin = (user: User): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data: serverAuthorizationInfo } =
        await api.post<ServerAuthInfo>(APIRoute.Login(), user);

      const authorizationInfo = adaptAuthorizationInfoToClient(serverAuthorizationInfo);

      saveToken(authorizationInfo.token);
      dispatch(redirectToRoute(AppRoute.Root()));
      dispatch(setAuthorizationInfo(authorizationInfo));
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));

    } catch (error) {
      toast.error('Login is failed');
    }
  };

const deleteLogout = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      await api.delete(APIRoute.Logout());
      dropToken();
      dispatch(setAuthorizationInfo(null));
      dispatch(setAuthorizationStatus(AuthorizationStatus.NotAuth));

    } catch {
      toast.error('Logout is falied');
    }
  };

const getFavoriteFilms = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setFavoriteFilmsFetchStatus(FetchStatus.Loading));

    try {
      const { data: serverFilms } = await api.get<ServerFilm[]>(APIRoute.FavoriteFilms());
      const films = serverFilms.map((serverFilm) => adaptFilmToClient(serverFilm));

      dispatch(setFavoriteFilms(films));
      dispatch(setFavoriteFilmsFetchStatus(FetchStatus.Succeeded));

    } catch (error) {
      dispatch(setFavoriteFilmsFetchStatus(FetchStatus.Failed));
    }
  };

const getСurrentComments = (filmId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setCurrentCommentsFetchStatus(FetchStatus.Loading));

    try {
      const { data: comments } = await api.get<Comment[]>(APIRoute.Comments(filmId));

      dispatch(setCurrentComments(comments));
      dispatch(setCurrentCommentsFetchStatus(FetchStatus.Succeeded));

    } catch (error) {
      dispatch(setCurrentCommentsFetchStatus(FetchStatus.Failed));
    }
  };

export { postComment, getSimilarFilms, getСurrentFilm, getСurrentComments, getFavoriteFilms, deleteLogout, postLogin, getLogin, getPromoFilm, getFilms };
