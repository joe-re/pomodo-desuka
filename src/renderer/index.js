import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/app';

window.React = React;

const _store = store();

render(
  <Provider store={_store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
