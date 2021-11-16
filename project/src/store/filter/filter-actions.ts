import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../../constants';

const setFilter = createAction(ActionType.SetFilter, (filter: string) => ({
  payload: {
    filter,
  },
}));

export { setFilter };
