import type { Film, User } from '../types/types';
import { EMAIL_REGEX, EMPTY_SPACE, MIN_PASSWORD_LENGTH } from '../constants';

const validateFormData = ({email, password}: User): string => {
  if (!email) {
    return 'E-mail is requred';
  }

  if (!EMAIL_REGEX.test(email.toLowerCase())) {
    return 'E-mail is invalid';
  }

  if (!password) {
    return 'Password is required';
  }

  if (password.length < MIN_PASSWORD_LENGTH) {
    return `Password must have at least ${MIN_PASSWORD_LENGTH} symbols`;
  }

  if (password.includes(EMPTY_SPACE)) {
    return 'Password can not containt empty spaces';
  }

  return '';
};

const getRandomInteger = (a = 0, b = 1): number => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const shuffle = <T>(items: T[]): T[] => items.slice().sort(() => Math.random() - 0.5);

const getRandomItemFromArray = <T>(items: T[]): T => {
  const index = getRandomInteger(0, items.length - 1);
  return items[index];
};

const splitArrayInTwo = <T>(items: T[]): [T[], T[]] => {
  const middleIndex = Math.ceil(items.length / 2);
  return [ items.slice(0, middleIndex), items.slice(middleIndex)];
};

const isAllCasesChecked = (argument: never): never => {
  throw new Error('Not all cases was checked');
};

const getFilmById = (films: Film[], id: number) => {
  const foundFilm = films.find((film) => film.id === id);

  if (!foundFilm) {
    throw new Error(`Film with id=${id} does not exist`);
  }

  return foundFilm;
};

const getSimilarFilms = (films: Film[], id: number) => {
  const referenceFilm = getFilmById(films, id);
  return films.filter((film) => film.id !== id && film.genre === referenceFilm.genre);
};

export {validateFormData, getSimilarFilms, getFilmById, getRandomInteger, shuffle, getRandomItemFromArray, splitArrayInTwo, isAllCasesChecked};
