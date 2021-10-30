import { generatePath } from 'react-router';

const AppRoute = {
  Root: () => '/',
  Login: () => '/login',
  MyList: () => '/mylist',
  Film: (id:string | number = ':id') => generatePath('/films/:id', { id: id}),
  AddReview: (id:string | number = ':id') => generatePath('/films/:id/review', { id: id}),
  Player: (id:string | number = ':id') => generatePath('/player/:id', { id: id}),
} as const;

const FilmCardBackgroundSize = {
  Big: 'BIG',
  Small: 'SMALL',
};

const AuthorizationStatus = {
  Auth: 'AUTH',
  NotAuth: 'NOT_AUTH',
} as const;

const FilmCardTab = {
  Overview: 'overview',
  Details: 'details',
  Reviews: 'reviews',
} as const;

const RatingDescription = {
  Bad: 'Bad',
  Normal: 'Normal',
  Good: 'Good',
  VeryGood: 'Very Good',
  Awesome: 'Awesome',
} as const;

const ratingDescriptionToLowerLimit: {
  [key in keyof typeof RatingDescription]: number
} = {
  Bad: 0,
  Normal: 3,
  Good: 5,
  VeryGood: 8,
  Awesome: 10,
};

const CustomRouteType = {
  Guest: 'GUEST',
  Private: 'PRIVATE',
} as const;

export {FilmCardBackgroundSize, AppRoute, AuthorizationStatus, FilmCardTab, ratingDescriptionToLowerLimit, RatingDescription, CustomRouteType};
