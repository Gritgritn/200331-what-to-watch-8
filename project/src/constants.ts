const AppRoute = {
  Root: () => '/',
  Login: () => '/login',
  MyList: () => '/mylist',
  Film: (id:string | number = ':id') => `/films/${id}`,
  AddReview: (id:string | number = ':id') => `/films/${id}/review`,
  Player: (id:string | number = ':id') => `/player/${id}`,
} as const;

const AuthorizationStatus = {
  Auth: 'AUTH',
  NotAuth: 'NOT_AUTH',
} as const;

const NavigationItem = {
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

export {AppRoute, AuthorizationStatus, NavigationItem, ratingDescriptionToLowerLimit, RatingDescription, CustomRouteType};
