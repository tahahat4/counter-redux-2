import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store/Store';
import { Provider } from 'react-redux';
// 3- import store and provider to wrapp in App(bach ga3 data w action li kayna f store l9ahya f ay component f App.js)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <App />
  </Provider>

);

