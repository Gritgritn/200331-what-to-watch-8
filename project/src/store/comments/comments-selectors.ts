import { Comment, FetchStatusType, State } from '../../types/types';
import { FetchStatus } from '../../constants';

const getCurrentCommentsData = ({ comments }: State): Comment[] | null => comments.currentComments.data;

const getCurrentCommentsStatus = ({ comments }: State): FetchStatusType => comments.currentComments.status;

const isNewCommentsLoading  = ({ comments }: State): boolean => comments.newComment.status === FetchStatus.Loading;

export { getCurrentCommentsData, getCurrentCommentsStatus, isNewCommentsLoading  };
