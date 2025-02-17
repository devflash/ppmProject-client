import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers,applyMiddleware,compose} from 'redux';
import projectReducer from './store/reducers/ProjectReducer';
import taskReducer from './store/reducers/TaskReducer';

import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
const rootReducer=combineReducers(
    {
        projectReducer:projectReducer,
        taskReducer:taskReducer
    }
    
)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app=(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
