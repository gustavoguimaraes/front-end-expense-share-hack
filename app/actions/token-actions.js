// api
import TokenAPI from '../sources/api/token-api';

// constants
import { TOKEN_CREATE, TOKEN_DELETE } from '../constants/token-constants';

// lib
import handleHttpAction from '../lib/handle-http-action';

export default {
  // action example
  // create(email, password) {
  //   return (dispatch) => {
  //     return handleHttpAction(dispatch, TOKEN_CREATE, TokenAPI.create(email, password));
  //   };
  // },

  // delete() {
  //   return (dispatch) => {
  //     return dispatch({ type: TOKEN_DELETE });
  //   };
  // }
};
