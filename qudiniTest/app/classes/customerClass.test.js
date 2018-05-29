import Customer from './customerClass.js';

const customerTest = new Customer({
  	currentPosition: 10,
  	expectedTime: '2018-05-29T11:34:45.470+01:00',
  	customer: {
  		name: 'test',
  		emailAddress: 'test@domain.com'
  	}
  })

const customerNoEmailTest = new Customer({
  	currentPosition: 10,
		expectedTime: null,
  	customer: {
  		name: 'test',
  		emailAddress: null
  	}
  })

it('Create new cutomer', () => {
  expect(customerTest.get())
    .toEqual({
			name: 'test',
			emailAddress: 'test@domain.com',
			avatarUri: 'https://s.gravatar.com/avatar/9650ef957e71f654013e1319f3c72268',
	    currentPosition: 10,
      expectedTime: 1527590085470
	});
});

it('Get specific item', () => {
  expect(customerTest.get('currentPosition'))
    .toEqual(10);
});

it('Test avatarUri is null when no emailAddress', () => {
  expect(customerNoEmailTest.get('avatarUri'))
    .toEqual(null);
});
