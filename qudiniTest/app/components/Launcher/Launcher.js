import React, {PureComponent} from "react";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from "../../reducers/index.js";
import App from "../App/App.js";
import ApiService from "../../services/api/index.js";

const store = createStore(rootReducer, {}, applyMiddleware(ApiService));

export default class Launcher extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}