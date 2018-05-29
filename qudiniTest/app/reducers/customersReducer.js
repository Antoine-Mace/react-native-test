import {
  SET_QUEUE_REFRESH_TIMEOUT,
  CLEAR_QUEUE_REFRESH_TIMEOUT,
  GET_CUSTOMERS_QUEUE_SUCCESS,
  GET_CUSTOMERS_QUEUE_ERROR
} from "../actionTypes/index.js";
import Customer from "../classes/customerClass.js";

const defaultState = {
  queueRefreshTimeout: null,
  queue: [],
  queueLength: -1,
  minutesToNextFree: -1,
};

const customersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CUSTOMERS_QUEUE_SUCCESS: {
      const queueData = action.value.queueData;
      const queue = queueData.queue.customersToday
        .map((data) => new Customer(data))
        .sort((a, b) => a.get('expectedTime') > b.get('expectedTime'));
      return {
        ...state,
        queue: queue || defaultState.queue,
        queueLength: queueData.queueLength || defaultState.queueLength,
        minutesToNextFree: queueData.minutesToNextFree || defaultState.minutesToNextFree
      };
    }
    case GET_CUSTOMERS_QUEUE_ERROR:
      return {...defaultState, queueRefreshTimeout: state.queueRefreshTimeout};
    case SET_QUEUE_REFRESH_TIMEOUT:
      return {...state, queueRefreshTimeout: action.value}
    case CLEAR_QUEUE_REFRESH_TIMEOUT:
      return {...state, queueRefreshTimeout: null}
    default:
      return state;
  }
};

export default customersReducer;