import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { Router as BrowserRouter } from 'react-router-dom';
import browserHistory from './browser-history';
import { configureStore } from '@reduxjs/toolkit';
import { AuthorizationStatus } from './constants';
import { createAPI } from './services/api';
import { setAuthorizationStatus } from './store/authorization/authorization-actions';
import { Toaster } from 'react-hot-toast';
import { redirect } from './store/middleware/redirect';
import { rootReducer } from './store/root-reducer';
import { getLogin } from './store/authorization/authorization-api-actions';

const api = createAPI(() => {
  store.dispatch(setAuthorizationStatus(AuthorizationStatus.NotAuth));
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(getLogin());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
      <Toaster position="top-right" />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
