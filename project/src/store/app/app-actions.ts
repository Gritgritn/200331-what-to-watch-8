import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../../constants';

const redirectToRoute = createAction(ActionType.Redirect, (route: string) => ({
  payload: {
    route,
  },
}));

export { redirectToRoute };
