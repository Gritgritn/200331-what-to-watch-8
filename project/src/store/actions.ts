import { ActionType } from '../constants';

const redirectToRoute = (route: string) => ({
  type: ActionType.Redirect,
  payload: {
    route,
  },
} as const);

export { redirectToRoute };
