import { FetchStatus } from '../constants';
import { FetchStatusType } from '../types/types';

const isFetchIdle = (status: FetchStatusType): boolean => status === FetchStatus.Idle;

const isFetchNotReady = (status: FetchStatusType): boolean => status === FetchStatus.Idle || status === FetchStatus.Loading;

const isFetchError = (status: FetchStatusType): boolean => status === FetchStatus.Failed;

export {isFetchError, isFetchNotReady, isFetchIdle};
