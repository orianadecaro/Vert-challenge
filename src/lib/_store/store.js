import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import userReducer from '../_reducer/User.reducer';

const rootReducer = combineReducers({
    user: userReducer
})

const composeEnhancers = compose;

export default function generateStore(){
    const store = createStore( rootReducer,  composeEnhancers( applyMiddleware(thunk) ))
    return store;
}