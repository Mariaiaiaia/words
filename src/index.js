import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'
import './index.scss';
import App from './App';
import { HashRouter } from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store);

ReactDOM.render(

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
            <App />
        </HashRouter>
      </PersistGate>
    </Provider>,
    document.getElementById('root')
);

