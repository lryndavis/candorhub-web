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
import {DashboardContainer} from './components/body/dashboard/Dashboard';
import {SignInContainer} from './components/body/splash/SignIn';
import {Splash} from './components/body/splash/Splash';
import {GalleryContainer} from './components/body/gallery/Gallery';
import {GalleryViewContainer} from './components/body/gallery/GalleryView';

const store = createStore(reducer, applyMiddleware(thunk));

//Routing table
const routes = (
  <Route component={App}>
    <Route path='/' component={Splash} />
    <Route path='/dashboard' component={DashboardContainer} />
    <Route path='gallery' component={GalleryContainer} />
    <Route path="/gallery/:id" component={GalleryViewContainer} />
  </Route>
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
