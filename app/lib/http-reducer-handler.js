import Immutable from 'immutable';

export default (state, action, cb) => {
  const meta = action.meta || {};

  return state.withMutations((map) => {
    map.delete('error');
    map.delete('errorData');

    map.set('loading', meta.loading || false);

    if (action.error) {
      try {
        map.set('errorData', Immutable.fromJS(action.payload.body));
      } catch (err) {
        map.set('errorData', null);
      }

      map.set('error', Immutable.fromJS(action.payload));
    } else if (!meta.loading) {
      if (cb) {
        cb(map, action);
      } else {
        map.set('data', Immutable.fromJS(action.payload));
      }
    }
  });
};
