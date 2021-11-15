import { Comment, FetchStatusType, State } from '../../types/types';

const getCurrentCommentsData = ({ comments }: State): Comment[] | null => comments.currentComments.data;

const getCurrentCommentsStatus = ({ comments }: State): FetchStatusType => comments.currentComments.status;

const getNewCommentsStatus = ({ comments }: State): FetchStatusType => comments.newComment.status;

export { getCurrentCommentsData, getCurrentCommentsStatus, getNewCommentsStatus };
