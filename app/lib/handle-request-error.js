// constants
import { APP_ERROR, SERVER_ERROR, UNAUTHORIZED_ERROR } from '../constants/application-constants';

export default (dispatch, constant, err) => {
  if (!err.status) {
    dispatch({ type: APP_ERROR, payload: err, error: true });
  } else if (err.status >= 500) {
    dispatch({ type: SERVER_ERROR, payload: err, error: true });
  } else if (err.status === 401) {
    dispatch({ type: UNAUTHORIZED_ERROR, payload: err, error: true });
  }

  dispatch({ type: constant, payload: err.response, error: true });
};
