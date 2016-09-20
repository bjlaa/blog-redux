import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import configureStore from './store';
import routes from './routes';

const store = configureStore();
import './global.css';

render(<Provider store={store}>
    <Router history={appHistory} routes={routes} />
  </Provider>, document.getElementById('root'));
