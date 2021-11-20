import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../../constants';
import { Comment, FetchStatusType } from '../../types/types';

const setCurrentComments = createAction(ActionType.SetCurrentComments, (currentComments: Comment[] | null) => ({
  payload: {
    currentComments,
  },
}));

const setCurrentCommentsFetchStatus = createAction(ActionType.SetCurrentCommentsFetchStatus, (status: FetchStatusType) => ({
  payload: {
    status,
  },
}));

const setNewCommentFetchStatus = createAction(ActionType.SetNewCommentFetchStatus, (status: FetchStatusType) => ({
  payload: {
    status,
  },
}));

export { setCurrentComments, setCurrentCommentsFetchStatus, setNewCommentFetchStatus };
