import type { Film } from '../types/types';

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

const getFavoriteFilms = (films: Film[]) => films.filter((film) => film.isFavorite);

export {getSimilarFilms, getFavoriteFilms, getFilmById, getRandomInteger, shuffle, getRandomItemFromArray, splitArrayInTwo, isAllCasesChecked};
