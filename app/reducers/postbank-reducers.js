import Immutable from 'immutable';

// constants
import { POSTBANK_FETCH } from '../constants/postbank-constants';

// lib
import httpReducerHandler from '../lib/http-reducer-handler';

export default (state = Immutable.Map(), action) => {
  switch (action.type) {
    case POSTBANK_FETCH: return httpReducerHandler(state, action);
    default:     return state;
  }
};
