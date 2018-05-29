import React from "react";
import CustomerRow from "./CustomerRow.js";
import renderer from "react-test-renderer";
import Customer from "../../../classes/customerClass.js";

const customerTest = new Customer({
  currentPosition: 10,
  customer: {
    name: 'test',
    emailAddress: 'test@domain.com'
  }
})

it('renders without crashing', () => {
  const rendered = renderer.create(<CustomerRow data={customerTest}/>).toJSON();
  expect(rendered).toBeTruthy();
});


it('test searchFilter', () => {
  const rendered = renderer.create(<CustomerRow data={customerTest} search={'test2'}/>).toJSON();
  expect(rendered).toEqual(null);
});

it('test searchFilter', () => {
  const rendered = renderer.create(<CustomerRow data={customerTest} search={'TEST'}/>).toJSON();
  expect(rendered).toBeTruthy();
});