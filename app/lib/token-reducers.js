import Immutable from 'immutable';

// constants
import { TOKEN_CREATE } from '../constants/token-constants';

// lib
import httpReducerHandler from '../lib/http-reducer-handler';

export default (state = Immutable.Map(), action) => {
  switch (action.type) {
    case TOKEN_CREATE:              return httpReducerHandler(state, action);
    default:                        return state;
  }
};
