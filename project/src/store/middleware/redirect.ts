import browserHistory from '../../browser-history';
import { Middleware } from '@reduxjs/toolkit';
import { State } from '../../types/types';
import { ActionType } from '../../constants';

const redirect: Middleware<unknown, State> =
  (_store) =>
    (next) =>
      (action) => {

        if (action.type === ActionType.Redirect) {
          browserHistory.push(action.payload.route);
        }

        return next(action);
      };

export { redirect };
