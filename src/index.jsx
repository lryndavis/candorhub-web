import {Map} from 'immutable';
import ReactDOM from 'react-dom';
import React from 'react';
import {Router, IndexRoute, Route, hashHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {DashboardContainer} from './components/body/dashboard/Dashboard';
import App from './components/App';
import {GalleryContainer} from './components/body/gallery/Gallery';
import {GalleryViewContainer} from './components/body/gallery/GalleryView';
import reducer from './reducers/index';
import styles from './stylesheets/main.scss';
import {SignInContainer} from './components/body/splash/SignIn';
import {SplashContainer} from './components/body/splash/Splash';
import {configure} from 'redux-auth-candorhub';
import {UserGalleryContainer} from './components/body/usergallery/UserGallery';
import {ProfileGalleryContainer} from './components/body/usergallery/ProfileGallery';

const store = createStore(reducer, applyMiddleware(thunk));

//Routing table
const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={SplashContainer} />
    <Route path='dashboard' component={DashboardContainer} />
    <Route path='gallery' component={GalleryContainer} />
    <Route path="usergallery" component={UserGalleryContainer} />
    <Route path="gallery/:id" component={GalleryViewContainer} />
    <Route path="profilegallery/:id" component={ProfileGalleryContainer} />
  </Route>
);

store.dispatch(configure(
  {apiUrl: 'https://candorhub-api.herokuapp.com'},
  {serverSideRendering: false, cleanSession: true, clientOnly: true}
)).then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
  );
});
