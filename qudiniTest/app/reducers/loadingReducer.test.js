import React from 'react';
import loadingReducer from './loadingReducer.js';
import {
  GET_CUSTOMERS_QUEUE,
  GET_CUSTOMERS_QUEUE_SUCCESS,
  GET_CUSTOMERS_QUEUE_ERROR 
} from '../actionTypes/index.js';

it('LoadingReducer load without crashing', () => {
  expect(
    loadingReducer(undefined, {type: null, value: null})
  ).toEqual({ loading: false });
});

it(`test loading On ${GET_CUSTOMERS_QUEUE}`, () => {
  expect(
    loadingReducer(undefined, { type: GET_CUSTOMERS_QUEUE })
  ).toEqual({ loading: true });
});

it(`test loading Off ${GET_CUSTOMERS_QUEUE_SUCCESS}`, () => {
  expect(
    loadingReducer({ loading: true }, { type: GET_CUSTOMERS_QUEUE_SUCCESS })
  ).toEqual({ loading: false });
});

it(`test loading off ${GET_CUSTOMERS_QUEUE_ERROR}`, () => {
  expect(
    loadingReducer({ loading: true }, {type: GET_CUSTOMERS_QUEUE_ERROR})
  ).toEqual({ loading: false });
});