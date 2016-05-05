import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './reducer';

import App from './components/App';
import {CritiqueContainer} from './components/body/Critique';
import {SignInContainer} from './components/splash/SignIn';

const store = createStore(reducer);

//Routing table
const routes = <Route component={App}>
    <Route path="/" component={SignInContainer} />
    <Route path="/critique" component={CritiqueContainer} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
