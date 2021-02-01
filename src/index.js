import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';
import {createStore} from "redux"
import {Provider} from "react-redux"
import App from './App';
import reportWebVitals from './reportWebVitals';
import aReducer from "./reducers/aReducer"
import AnimLetter from "./functions/bg"
const store = createStore(aReducer)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AnimLetter />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
