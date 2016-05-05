import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import App from './components/App';
import Critique from './components/body/Critique';
import Sign_In from './components/splash/Sign_In';

//Routing table
const routes = <Route component={App}>
    <Route path="/" component={Sign_In} />
    <Route path="/critique" component={Critique} />
</Route>;

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
);
