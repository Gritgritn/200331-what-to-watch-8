import { RouteProps } from 'react-router';
import { AuthorizationStatus } from '../const';

export type MainScreenProps = {
  mainFilmCard: MainFilmCard,
}

export type MainFilmCard = {
  title: string,
  genre: string,
  year: number,
}

export type PrivateRouteProps = RouteProps & {
  authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus],
}
