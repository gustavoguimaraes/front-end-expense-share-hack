// constants
import { TOKEN_DELETE } from '../constants/token-constants';

export default (reducers) => {
  return (state, action) => {
    let newState = state;

    if (action.type === TOKEN_DELETE) {
      newState = {};
    }

    return reducers(newState, action);
  };
};
