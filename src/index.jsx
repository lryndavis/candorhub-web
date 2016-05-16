import {Map} from 'immutable';
import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {DashboardContainer} from './components/body/dashboard/Dashboard';
import App from './components/App';
import {GalleryContainer} from './components/body/gallery/Gallery';
import {GalleryViewContainer} from './components/body/gallery/GalleryView';
import reducer from './reducer';
import styles from './stylesheets/main.scss';
import {SignInContainer} from './components/body/splash/SignIn';
import {Splash} from './components/body/splash/Splash';


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
