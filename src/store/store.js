import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {mainReducer} from '../reducers/reducers';

const middlewares = [thunk];
const rootReducer = combineReducers({mainReducer});
export const store = createStore(rootReducer,applyMiddleware(...middlewares));