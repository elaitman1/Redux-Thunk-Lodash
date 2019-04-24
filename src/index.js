// npm i --save react-redux axios redux-thunk lodash

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App'
import reducers from './reducers';

// ReactDOM.render(
//   <Provider store={createStore(reducers)}>
//     <App />
//   </Provider>,
//   document.querySelector('#root')
// );
//below is for wiring up middleware for api
const store = createStore(reducers, applyMiddleware(thunk));
//
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
