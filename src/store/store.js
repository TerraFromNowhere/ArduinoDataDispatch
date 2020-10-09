import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {mainReducer} from '../reducers/reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const middlewares = [thunk];
const rootReducer = combineReducers({mainReducer});
export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middlewares)));