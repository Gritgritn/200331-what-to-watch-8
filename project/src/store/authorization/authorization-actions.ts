import { createAction } from '@reduxjs/toolkit';
import { ActionType, AuthorizationStatus } from '../../constants';
import { AuthoarizationInfo, ValuesOf } from '../../types/types';

const setAuthorizationStatus = createAction(ActionType.SetAuthorizationStatus, (status: ValuesOf<typeof AuthorizationStatus>) => ({
  payload: {
    status,
  },
}));

const setAuthorizationError = createAction(ActionType.SetAuthorizationError, (errorMessage: string) => ({
  payload: {
    errorMessage,
  },
}));

const setAuthorizationInfo = createAction(ActionType.SetAuthorizationInfo, (info: AuthoarizationInfo | null) => ({
  payload: {
    info,
  },
}));

const clearAuthorizationError = createAction(ActionType.SetAuthorizationError, () => ({
  payload: {
    errorMessage: '',
  },
}));

export { setAuthorizationStatus, setAuthorizationError, setAuthorizationInfo, clearAuthorizationError };
