import 'babel-polyfill';

import './assets/stylesheets/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore, compose } from 'redux';
import * as storage from 'redux-storage';

import middleware from './middleware';
import reducers from './reducers';
import routes from './config/routes';
import storageEngine from './lib/storage-engine';

const load    = storage.createLoader(storageEngine);
const store   = compose(middleware)(createStore)(reducers, window.devToolsExtension && window.devToolsExtension());
const history = syncHistoryWithStore(browserHistory, store);

load(store).then(() => {
  const root = (
    <Provider store={ store }>
      <Router history={ history }>
        { routes() }
      </Router>
    </Provider>
  );

  ReactDOM.render(root, document.getElementById('body'));
});
