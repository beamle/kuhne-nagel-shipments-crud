import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {legacy_createStore as createStore} from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers/reducerCombiner";


const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// console.log('Initial state', store.getState());
// store.subscribe(() => console.log('updated state', store.getState()))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

