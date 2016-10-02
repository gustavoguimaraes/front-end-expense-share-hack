// api
import PostbankAPI from '../sources/api/postbank-api';

// constants
import { POSTBANK_FETCH } from '../constants/postbank-constants';

// lib
import handleHttpAction from '../lib/handle-http-action';

export default {
  fetch() {
    return (dispatch) => {
      return handleHttpAction(dispatch, POSTBANK_FETCH, PostbankAPI.fetch());
    };
  }
};
