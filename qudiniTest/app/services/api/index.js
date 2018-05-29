import {
	GET_CUSTOMERS_QUEUE
} from '../../actionTypes/index.js'

const apiRequest = next => (type, route, name) => fetch(route, {
  method: type,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Basic Y29kZXRlc3QxOmNvZGV0ZXN0MTAw'
  }})
  .then((response) => response.json())
  .then(
    (responseJson) => {
      next({
        type: `${name}_SUCCESS`,
        value: responseJson
      });
    }).catch(
    (err) => {
      next({
        type: `${name}_ERROR`,
        value: err
      });
    });

const apiService = store => next => action =>{
	next(action);
	const apiCall = apiRequest(next);
	switch (action.type) {
		case GET_CUSTOMERS_QUEUE:
			apiCall('get', 'https://app.qudini.com/api/queue/gj9fs', GET_CUSTOMERS_QUEUE)
			break
		default:
			break
	}
};

export default apiService;