import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {Map} from 'immutable';

import reducer from './reducer';

import styles from './stylesheets/main.scss';

import App from './components/App';
import {CritiqueContainer} from './components/body/Critique';
import {SignInContainer} from './components/splash/SignIn';
import {Splash} from './components/splash/Splash';
import {GalleryContainer} from './components/body/Gallery';

const store = createStore(reducer, applyMiddleware(thunk));

//Routing table
const routes = (
  <Route component={App}>
    <Route path='/' component={Splash} />
    <Route path='/critique' component={CritiqueContainer} />
    <Route path='/gallery' component={GalleryContainer} />
  </Route>
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
