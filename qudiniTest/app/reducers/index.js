import { combineReducers } from 'redux';
import searchReducer from './searchReducer.js';
import customersReducer from './customersReducer.js';
import loadingReducer from './loadingReducer.js';

export default combineReducers({
  searchReducer,
  customersReducer,
  loadingReducer
});