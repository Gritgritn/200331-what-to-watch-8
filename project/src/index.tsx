import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AuthorizationStatus } from './constants';
import { createAPI } from './services/api';
import { setAuthorizationStatus } from './store/authorization/authorization-actions';
import { Toaster } from 'react-hot-toast';
import { redirect } from './store/middleware/redirect';
import { rootReducer } from './store/root-reducer';

const api = createAPI(() => {
  store.dispatch(setAuthorizationStatus(AuthorizationStatus.NotAuth));
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Toaster position="top-right" />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
