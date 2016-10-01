// lib
import handleRequestError from './handle-request-error';

export default (dispatch, constant, promise) => {
  dispatch({ type: constant, meta: { loading: true } });

  return promise
    .then((resp) => {
      dispatch({ type: constant, payload: resp.body || resp });
    })
    .catch((err) => {
      handleRequestError(dispatch, constant, err);
    });
};
