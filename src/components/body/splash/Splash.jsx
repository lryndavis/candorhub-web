import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import React from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import * as actionCreators from '../../../action_creators';
import {SignInContainer} from './SignIn';
import SignUp from './SignUp';


export const Splash = React.createClass({

  getInitialState:function() {
    return { signUpShow: true };
    return { signInShow: false };
  },

  onHandleClick: function() {
    this.setState({ signUpShow: !this.state.signUpShow });
    this.setState({ signInShow: !this.state.signInShow });
  },

  componentWillUpdate(nextProps) {
    //redirect to dashboard on successful sign-in
    if (nextProps.signedIn) {
      browserHistory.push("/dashboard");
    }
  },

  render: function() {
    return (
      <div className="splash">
        <h1 className="splash__logo">candorhub</h1>
        <p className="splash__tagline">Thought Provoking Critique</p>
          { this.state.signUpShow ? <SignUp /> : null }
          { this.state.signUpShow ? <h3 className="form__member-header" onClick={ this.onHandleClick }>Already a member?</h3> : null }
        <ReactCSSTransitionGroup transitionName="formTransition" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
          { this.state.signInShow ? <SignInContainer /> : null }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
});

function mapStateToProps(state) {
  return {
    signedIn: state.auth.getIn(["user", "isSignedIn"])
  };
}

export const SplashContainer = connect(
  mapStateToProps,
  actionCreators
)(Splash);
