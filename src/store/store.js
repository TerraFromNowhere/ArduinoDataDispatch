import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {mainReducer} from '../reducers/reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

import dataReducer from '../reducers/dataSlice';

const middlewares = [thunk];
const rootReducer = combineReducers({dataReducer});
export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middlewares)));