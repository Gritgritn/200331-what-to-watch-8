import { EMAIL_REGEX, LATIN_REGEX, NUMERIC_REGEX, EMPTY_SPACE, MIN_PASSWORD_LENGTH, Rating, ReviewContent } from '../constants';

const getEmailValidityMessage = ( email: string ): string => {
  if (!email) {
    return 'E-mail is required.';
  }

  if (!EMAIL_REGEX.test(email.toLowerCase())) {
    return 'E-mail is invalid.';
  }
  return '';
};

const getPasswordValidityMessage = (password: string): string => {
  if (!password) {
    return 'Password is required.';
  }

  if (password.length < MIN_PASSWORD_LENGTH) {
    return `Password must have at least ${MIN_PASSWORD_LENGTH} symbols.`;
  }

  if (!NUMERIC_REGEX.test(password.toLowerCase())) {
    return 'Password must contain at least one number.';
  }

  if (!LATIN_REGEX.test(password.toLowerCase())) {
    return 'Password must contain at least one literal symbol.';
  }

  if (password.includes(EMPTY_SPACE)) {
    return 'Password can not contain  empty spaces.';
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

const validateReviewRating = (rating: number): boolean => {
  if (rating >= Rating.MinValue && rating <= Rating.MaxValue) {
    return true;
  }

  return false;
};

const validateReviewContent = (content: string): boolean => {
  if (content.length >= ReviewContent.MinLength && content.length <= ReviewContent.MaxLength) {
    return true;
  }

  return false;
};

const asyncDelay = (delay: number): Promise<void> => new Promise<void>((resolve) => setTimeout(() => resolve(), delay));

export { asyncDelay, validateReviewRating, validateReviewContent, getPasswordValidityMessage, getEmailValidityMessage, getRandomInteger, shuffle, getRandomItemFromArray, splitArrayInTwo };
