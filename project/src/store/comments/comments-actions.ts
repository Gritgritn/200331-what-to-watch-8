import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../../constants';
import { Comment, FetchStatusType } from '../../types/types';

export const setCurrentComments = createAction(ActionType.SetCurrentComments, (currentComments: Comment[] | null) => ({
  payload: {
    currentComments,
  },
}));

export const setCurrentCommentsFetchStatus = createAction(ActionType.SetCurrentCommentsFetchStatus, (status: FetchStatusType) => ({
  payload: {
    status,
  },
}));

export const setNewCommentFetchStatus = createAction(ActionType.SetNewCommentFetchStatus, (status: FetchStatusType) => ({
  payload: {
    status,
  },
}));
