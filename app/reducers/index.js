import changeCase from 'change-case';
import { combineReducers } from 'redux';
import * as storage from 'redux-storage';
import immutableMerger from 'redux-storage-merger-immutablejs';

const context = require.context('./', true, /.*/);

const reducers = {};

let rootReducer;

context.keys().forEach((key) => {
  if (!(/\.js/).test(key) && !(/index/).test(key)) {
    const reducer = context(key).default;

    if ((/^\.\/root-reducer/).test(key)) {
      rootReducer = reducer;
    } else {
      reducers[changeCase.camelCase(key.substr(2, key.indexOf('-reducers') - 2))] = reducer;
    }
  }
});

if (!rootReducer) {
  rootReducer = (r) => r;
}

export default storage.reducer(rootReducer(combineReducers(reducers)), immutableMerger);
