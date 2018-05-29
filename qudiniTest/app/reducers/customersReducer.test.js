import React from 'react';
import customersReducer from './customersReducer.js';
import {
  GET_CUSTOMERS_QUEUE_SUCCESS,
  GET_CUSTOMERS_QUEUE_ERROR
} from '../actionTypes/index.js'

const defaultData = {
  queueRefreshTimeout: 'test',
  queue: [],
  queueLength: 10,
  minutesToNextFree: 20,
}

it(`test ${GET_CUSTOMERS_QUEUE_ERROR}`, () => {
  expect(
    customersReducer(defaultData, { type: GET_CUSTOMERS_QUEUE_ERROR })
  ).toEqual({
    queueRefreshTimeout: 'test',
    queue: [],
    queueLength: -1,
    minutesToNextFree: -1
  });
});