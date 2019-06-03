/*i am using an older verdion of react-redux 5.0.7 i think.... not sure if
errors were casue by a higher version or react-reduc or syntax*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

//redux store of state - basically the connection to database - vids 11/12
const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {attachAuthIsReady: true, useFirestoreForProfile: true, userProfile: 'users'})
  )
);

//wait this auth is resolved before loading components
store.firebaseAuthIsReady.then (() => {
  ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

  serviceWorker.unregister();
})
