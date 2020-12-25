import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux"; //"react-redux" -: it allows us to hook up our redux store to our react application.

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";

//Combining Multiple Reducers.
const rootReducer = combineReducers({
  counter_Reducer: counterReducer,
  result_Reducer: resultReducer,
});

//we're creating a store successfully with our own reducer.
const store = createStore(rootReducer);

// <Provider /> is a helper component which makes the Redux store available to react components that have been wrapped in the connect() function.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
