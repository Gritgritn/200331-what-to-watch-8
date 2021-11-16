import { createAction } from '@reduxjs/toolkit';
import { ActionType, AuthorizationStatus } from '../../constants';
import { AuthorizationInfo, ValuesOf } from '../../types/types';

const setAuthorizationStatus = createAction(ActionType.SetAuthorizationStatus, (status: ValuesOf<typeof AuthorizationStatus>) => ({
  payload: {
    status,
  },
}));

const setAuthorizationErrorMessage = createAction(ActionType.SetAuthorizationError, (errorMessage: string) => ({
  payload: {
    errorMessage,
  },
}));

const setAuthorizationInfo = createAction(ActionType.SetAuthorizationInfo, (info: AuthorizationInfo | null) => ({
  payload: {
    info,
  },
}));

const clearAuthorizationErrorMessage = createAction(ActionType.SetAuthorizationError, () => ({
  payload: {
    errorMessage: '',
  },
}));

export { setAuthorizationStatus, setAuthorizationErrorMessage, setAuthorizationInfo, clearAuthorizationErrorMessage };
