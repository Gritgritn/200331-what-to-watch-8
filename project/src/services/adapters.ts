import camelCase from 'lodash/camelCase';
import { ServerFilm, Film, ServerAuthorizationInfo, AuthorizationInfo, Comment, ServerCommentGet } from '../types/types';
import dayjs from 'dayjs';

const adaptFilmToClient = (serverFilm: ServerFilm): Film => {
  const clientFilm: {
    [key: string]: number | string | string[] | boolean,
  } = {};

  Object.entries(serverFilm).forEach(([key, value]) => {
    clientFilm[camelCase(key)] = value;
  });

  clientFilm.actors = serverFilm.starring;
  delete clientFilm.starring;

  return clientFilm as Film;
};

const adaptAuthorizationInfoToClient = (serverAuthorizationInfo: ServerAuthorizationInfo): AuthorizationInfo => {
  const authInfo: {
    [key: string]: number | string;
  } = {};

  Object.entries(serverAuthorizationInfo).forEach(([key, value]) => {
    authInfo[camelCase(key)] = value;
  });


  return authInfo as AuthorizationInfo;
};

const adaptCommentToClient = (serverComment: ServerCommentGet): Comment => ({
  ...serverComment,
  date: dayjs(serverComment.date).toDate(),
} as Comment);

export { adaptFilmToClient, adaptAuthorizationInfoToClient, adaptCommentToClient };
