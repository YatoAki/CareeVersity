import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routing from './Routing';
import { Provider } from 'react-redux';
import {createStore} from "redux"
import rootReducer from './reducers';

const store = createStore(rootReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Routing/>
  </Provider>
);
