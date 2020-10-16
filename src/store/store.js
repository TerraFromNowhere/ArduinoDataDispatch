
import {configureStore} from '@reduxjs/toolkit';
import getState from '../reducers/dataSlice';

export const store = configureStore({reducer:{ getState:getState }});