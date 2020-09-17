import React , {Component} from "react";
import ReactDOM from "react-dom";
import App from './components/App';

import {store} from './store/store';
import {Provider} from 'react-redux';

ReactDOM.hydrate(<Provider store={store}> <App/> </Provider>,document.querySelector("#root"));
