import {GET_CUSTOMERS_QUEUE, SET_QUEUE_REFRESH_TIMEOUT, CLEAR_QUEUE_REFRESH_TIMEOUT} from "../actionTypes";

const getCustomersQueueAction = () => ({
  type: GET_CUSTOMERS_QUEUE
});

const setQueueTimeoutRefreshAction = timeout => ({
  type: SET_QUEUE_REFRESH_TIMEOUT,
  value: timeout
});

const clearQueueTimeoutRefreshAction = () => ({
  type: CLEAR_QUEUE_REFRESH_TIMEOUT
});

export {getCustomersQueueAction, setQueueTimeoutRefreshAction, clearQueueTimeoutRefreshAction};