import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//importing the important details....

import {legacy_createStore as createStore , combineReducers , applyMiddleware, compose} from "redux"
import {thunk} from 'redux-thunk'
//........
import reportWebVitals from './reportWebVitals';
import { composeWithDevTools } from '@redux-devtools/extension/lib/types/logOnly';
import { Provider } from 'react-redux';
import reducer from '../src/redux/reducers/reducer'



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const rootReducer = combineReducers({reducer});

const intialstate = {}

const middleware : any = [thunk]

const state = createStore(rootReducer,intialstate,compose(applyMiddleware(...middleware)))

root.render(
  <Provider store={state}>
    <App />
    </Provider>
  
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
