import {createStore, combineReducers, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import estiReducer from './reducers/estiReducer';

const rootReducer = combineReducers({
    esti: estiReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));