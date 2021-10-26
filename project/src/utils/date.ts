import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const HOUR = 60;

export const formatRuntime = (runtime: number): string => dayjs.duration(runtime, 'minutes').format('H[h] mm[m]');

export const formatElapsedTime = (elapsedTime: number):string => {
  const format = elapsedTime >= HOUR ? '-HH:mm:ss' : '-mm:ss';
  return dayjs.duration(elapsedTime, 'minutes').format(format);
};

export const formatDatetime = (date: Date): string => dayjs(date).format('YYYY-MM-DD');

export const formatHumanizedDate = (date: Date): string => dayjs(date).format('MMMM D, YYYY');
