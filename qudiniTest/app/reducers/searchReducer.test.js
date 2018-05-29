import React from "react";
import searchReducer from "./searchReducer.js";
import {SEARCH_ACTION_SET, SEARCH_ACTION_CLEAR} from "../actionTypes/index.js";

it('SearchReducer load without crashing', () => {
  expect(
    searchReducer({name: null}, {type: null, value: null})
  ).toEqual({name: null});
});

it(`test ${SEARCH_ACTION_SET}`, () => {
  expect(
    searchReducer({name: null}, {type: SEARCH_ACTION_SET, value: 'test'})
  ).toEqual({name: 'test'});
});

it(`test ${SEARCH_ACTION_CLEAR}`, () => {
  expect(
    searchReducer({name: SEARCH_ACTION_CLEAR}, {type: SEARCH_ACTION_CLEAR})
  ).toEqual({name: null});
});