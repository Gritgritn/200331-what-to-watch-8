import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const SECONDS_IN_HOUR  = 3600;

const formatRuntime = (runtime: number): string => dayjs.duration(runtime, 'minutes').format('H[h] mm[m]');

const formatElapsedTime = (elapsedTime: number):string => {
  const format = elapsedTime >= SECONDS_IN_HOUR ? '-HH:mm:ss' : '-mm:ss';
  return dayjs.duration(elapsedTime, 'seconds').format(format);
};

const formatDateTime  = (date: Date): string => dayjs(date).format('YYYY-MM-DD');

const formatHumanizedDate = (date: Date): string => dayjs(date).format('MMMM D, YYYY');

export {formatRuntime, formatElapsedTime, formatDateTime, formatHumanizedDate};
