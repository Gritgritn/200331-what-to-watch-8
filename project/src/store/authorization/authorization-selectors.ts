import { AuthorizationStatus } from '../../constants';
import { AuthoarizationInfo, State, ValuesOf } from '../../types/types';

const getAuhorizationInfo = ({ authorization }: State): AuthoarizationInfo | null => authorization.info;

const getAuhorizationStatus = ({ authorization }: State): ValuesOf<typeof AuthorizationStatus> => authorization.status;

export { getAuhorizationInfo, getAuhorizationStatus };
