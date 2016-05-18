import React from 'react';
import {connect} from 'react-redux';
import {Link, browserHistory} from 'react-router';
import {EmailSignInForm} from 'redux-auth';

import * as actionCreators from '../../../action_creators';


export const SignIn = React.createClass({
  
  componentWillUpdate(nextProps) {
    console.log('receiving props');
    if (nextProps.signedIn === true) {
      browserHistory.push('/dashboard');
    } 
  },

  render: function() {
    return (
      <EmailSignInForm /> 
    )
  }
});

function mapStateToProps(state) {
  return {
    signedIn: state.auth.getIn(["user", "isSignedIn"])
  };
}

export const SignInContainer = connect(
  mapStateToProps,
  actionCreators
)(SignIn);
