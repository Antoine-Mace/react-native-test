import React from 'react';
import Customers from './Customers.js';

import renderer from 'react-test-renderer';
import Customer from '../../classes/customerClass.js'

const defaultProps = {
  searchAction: () => {},
  searchReducerValue: null,
  getCustomersQueueAction: () => {},
  customersReducerValue: {
    queueRefreshTimeout: {},
    queue: [],
    queueLength: 0,
    minutesToNextFree: 0,
  },
  setQueueTimeoutRefreshAction: () => {},
  clearQueueTimeoutRefreshAction: () => {},
  loadingReducer: false
};

const customerTest = new Customer({
  currentPosition: 10,
  customer: {
    name: 'test',
    emailAddress: 'test@domain.com'
  }
})

it('renders empty queue without crashing', () => {
  const rendered = renderer.create(<Customers {...defaultProps} />).toJSON();
  expect(rendered).toBeTruthy();
});


it('renders queue without crashing', () => {
  const queue = [];
  queue.push(customerTest)
  const rendered = renderer.create(<Customers {...defaultProps} customersReducerValue={
  	{
  	    queue,
    	queueLength: 1,
    	minutesToNextFree: 20,
    }
  } />).toJSON();
  expect(rendered).toBeTruthy();
});