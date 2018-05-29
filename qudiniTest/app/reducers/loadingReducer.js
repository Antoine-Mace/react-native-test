import {
  GET_CUSTOMERS_QUEUE,
  GET_CUSTOMERS_QUEUE_SUCCESS,
  GET_CUSTOMERS_QUEUE_ERROR 
} from '../actionTypes/index.js';

const defaultState = { loading: false };

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CUSTOMERS_QUEUE:
      return { ...state, loading: true };
    case GET_CUSTOMERS_QUEUE_SUCCESS:
    case GET_CUSTOMERS_QUEUE_ERROR:
      return  { ...state, loading: false };
    default:
      return state;
  }
};

export default searchReducer;