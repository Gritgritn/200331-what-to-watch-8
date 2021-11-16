import { AuthorizationStatus } from '../../constants';
import { AuthorizationInfo, State, ValuesOf } from '../../types/types';

const getAuhorizationInfo = ({ authorization }: State): AuthorizationInfo | null => authorization.info;

const getAuthorizationStatus  = ({ authorization }: State): ValuesOf<typeof AuthorizationStatus> => authorization.status;

const getUserAvatar = ({ authorization }: State): string | undefined => authorization.info?.avatarUrl;

const getAuthorizationErrorMessage = ({ authorization }: State): string => authorization.errorMessage;

export { getAuhorizationInfo, getAuthorizationStatus, getUserAvatar, getAuthorizationErrorMessage };
