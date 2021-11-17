import { FetchStatus } from '../../constants';
import { FetchedData, Comment, FetchStatusType } from '../../types/types';

export type CommentsState = {
  currentComments: FetchedData<Comment[]>,
  newComment: {
    status: FetchStatusType,
  },
};

const commentsInitialState: CommentsState = {
  currentComments: {
    data: null,
    status: FetchStatus.Idle,
  },
  newComment: {
    status: FetchStatus.Idle,
  },
};

export {commentsInitialState};
