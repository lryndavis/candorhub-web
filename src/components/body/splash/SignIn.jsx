import React from 'react';
import {connect} from 'react-redux';
import {Link, browserHistory} from 'react-router';
import {EmailSignInForm} from 'redux-auth';

import * as actionCreators from '../../../action_creators';


export const SignIn = React.createClass({

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
