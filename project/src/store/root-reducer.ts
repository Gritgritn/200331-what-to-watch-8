import { combineReducers } from 'redux';
import { filmsReducer } from './films/films-reducer';
import { authorizationReducer } from './authorization/authorization-reducer';
import { commentsReducer } from './comments/comments-reducer';
import { filterReducer } from './filter/filter-reducer';

const rootReducer = combineReducers({
  films: filmsReducer,
  comments: commentsReducer,
  filter: filterReducer,
  authorization: authorizationReducer,
});

export {rootReducer};
