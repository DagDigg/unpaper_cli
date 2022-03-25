import { loadStripe } from '@stripe/stripe-js';
import App from 'App';
import reducer from 'modules/main/reducer';
import mainSaga from 'modules/main/saga';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Client from 'services/client';
import 'fonts/eldwinStylesheet.css';
import 'fonts/jakartaStylesheet.css';
import * as serviceWorker from './serviceWorker';
import { STRIPE_PK } from 'common/constants';

export const client = new Client();

const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {});

const stripePromise = loadStripe(STRIPE_PK);

// create the saga middleware
const sagaMiddleware = createSagaMiddleware({ context: { client } });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// mount it on the Store
const store = createStore(reducer(), composeEnhancers(applyMiddleware(sagaMiddleware)));

// then run the saga
sagaMiddleware.run(mainSaga);

if (process.env.NODE_ENV === 'development') {
    // enable debugging grpc calls
    enableDevTools([Client.get()]);
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App stripePromise={stripePromise} />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
