import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {loginReducer} from './reducer';
import {Provider} from 'react-redux';
const store = createStore(loginReducer) 

ReactDOM.render(
  <div className="wraper">
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider> 
  </React.StrictMode>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
