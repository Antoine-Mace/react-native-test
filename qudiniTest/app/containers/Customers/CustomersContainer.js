// @flow

import { connect } from 'react-redux';

import Customers from '../../components/Customers/Customers.js';
import { 
	searchAction,
  getCustomersQueueAction,
	setQueueTimeoutRefreshAction, 
	clearQueueTimeoutRefreshAction 
} from '../../actions/index.js';

const mapStateToProps = ({ searchReducer: { name }, customersReducer: { queue, queueLength, minutesToNextFree, queueRefreshTimeout }, loadingReducer: { loading } }) => ({
  searchReducerValue: name,
  customersReducerValue: {
  	queueRefreshTimeout,
  	queue,
  	queueLength,
  	minutesToNextFree,
  },
  loadingReducer: loading
});

export default connect(mapStateToProps, { 
	searchAction, 
	getCustomersQueueAction, 
	setQueueTimeoutRefreshAction, 
	clearQueueTimeoutRefreshAction 
})(Customers);