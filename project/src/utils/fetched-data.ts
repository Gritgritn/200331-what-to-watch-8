import { FetchStatus } from '../constants';
import { FetchedData, FetchStatusType } from '../types/types';

const isFetchIdle = (item: FetchedData | FetchStatusType): boolean => {
  const status = typeof item === 'string' ? item : item.status;
  return status === FetchStatus.Idle;
};

const isFetchNotReady = (item: FetchedData | FetchStatusType): boolean => {
  const status = typeof item === 'string' ? item : item.status;
  return status === FetchStatus.Idle || status === FetchStatus.Loading;
};

const isFetchError = (item: FetchedData | FetchStatusType): boolean => {
  const status = typeof item === 'string' ? item : item.status;
  return status === FetchStatus.Failed;
};

export {isFetchError, isFetchNotReady, isFetchIdle};
