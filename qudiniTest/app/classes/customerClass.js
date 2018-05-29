import md5 from 'md5'

class Customer {
	customer: {
		emailAddress: null,
		avatarUri: null,
		currentPosition: -1,
		expectedTime: -1,
		name: null
	}

	constructor({customer: {emailAddress, name}, currentPosition, expectedTime}) {
		const avatarUri = this.createAvatarUri(emailAddress); 
		this.customer = Object.assign({}, {
			emailAddress,
			avatarUri,
			currentPosition,
      expectedTime: expectedTime ? (+ new Date(expectedTime)) : -1,
			name
		});
	}

	get = (item) => {
		return !item ? this.customer : this.customer[item];
	}

	createAvatarUri = (email) => {
		const sanetizeEmail = email ? ('' + email).trim().toLowerCase() : null;
		const hash = sanetizeEmail ? md5(sanetizeEmail, {encoding: "binary"}) : null;
		return hash ? `https://s.gravatar.com/avatar/${hash}` : null;
	}
}

export default Customer;