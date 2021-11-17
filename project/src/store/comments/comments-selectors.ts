import { createSelector } from 'reselect';
import { Comment, FetchStatusType, State } from '../../types/types';
import { FetchStatus } from '../../constants';

const getCurrentCommentsData = ({ comments }: State): Comment[] | null => comments.currentComments.data;

const getCurrentCommentsStatus = ({ comments }: State): FetchStatusType => comments.currentComments.status;

const isNewCommentsLoading = createSelector(
  ({ comments }: State) => comments.newComment.status,
  (status) => status === FetchStatus.Loading,
);

export { getCurrentCommentsData, getCurrentCommentsStatus, isNewCommentsLoading  };
