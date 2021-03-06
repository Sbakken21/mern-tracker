import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import reduxThunk from 'redux-thunk';
import 'materialize-css/dist/css/materialize.min.css';

import { unregister } from './registerServiceWorker';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.querySelector('#root')
);

// Un-register Service Worker
unregister();
