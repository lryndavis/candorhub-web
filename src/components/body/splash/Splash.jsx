import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import React from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';

import * as actionCreators from '../../../action_creators';
import {SignInContainer} from './SignIn';
import SignUp from './SignUp';

export const Splash = React.createClass({

  componentWillUpdate(nextProps) {
    console.log(nextProps);
    console.log('receiving props');
    console.log('signed in ' + nextProps.signedIn);
    if (nextProps.signedIn) {
      console.log("transitioning");
      // browserHistory.push("dashboard");
      browserHistory.push("/dashboard");
    }
  },

  render: function() {
    return (
      <div className="splash container">
        <h1 className="splash__logo">candorhub</h1>
        <p className="splash__tagline">Thought Provoking Critique</p>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
         <SignUp />
        </MuiThemeProvider>
        <SignInContainer />
      </div>
    )
  }
});

function mapStateToProps(state) {
  console.log("in map");
  console.log(state.auth.getIn(["user", "isSignedIn"]));
  return {
    signedIn: state.auth.getIn(["user", "isSignedIn"])
  };
}

export const SplashContainer = connect(
  mapStateToProps,
  actionCreators
)(Splash);
