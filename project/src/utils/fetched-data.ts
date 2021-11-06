import { FetchStatus } from '../constants';
import { FetchedData } from '../types/types';

const isFetchIdle = (item: FetchedData): boolean => item.status === FetchStatus.Idle;

const isFetchNotReady = (item: FetchedData): boolean => item.status === FetchStatus.Idle || item.status === FetchStatus.Loading;

const isFetchError = (item: FetchedData): boolean => !item.data || item.status === FetchStatus.Failed;

export {isFetchError, isFetchNotReady, isFetchIdle};
