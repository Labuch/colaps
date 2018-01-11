//import 'materialize-css/dist/css/materialize.min.css';
import 'semantic-ui-css/semantic.css';
import './colaps.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import AudioContextHandler from './handler/AudioContextHandler';
import reducers from './reducers';
//import registerServiceWorker from './registerServiceWorker';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(reduxThunk)));


var audioContextHandler = new AudioContextHandler(store);


ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.querySelector('#root'));
