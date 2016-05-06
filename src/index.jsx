import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {Map} from 'immutable';

import reducer from './reducer';

import App from './components/App';
import {CritiqueContainer} from './components/body/Critique';
import {SignInContainer} from './components/splash/SignIn';
import {Splash} from './components/splash/Splash';

const store = createStore(reducer, applyMiddleware(thunk));

//Routing table
const routes = <Route component={App}>
    <Route path='/' component={Splash} />
    <Route path="/critique" component={CritiqueContainer} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
