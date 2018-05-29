import { SEARCH_ACTION_SET, SEARCH_ACTION_CLEAR } from '../actionTypes/index.js';

const defaultState = { name: null };

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_ACTION_SET:
      return { ...state, name: action.value };
    case SEARCH_ACTION_CLEAR:
      return defaultState;
    default:
      return state;
  }
};

export default searchReducer;