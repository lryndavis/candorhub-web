import React from 'react';
import {connect} from 'react-redux';
import {Link, browserHistory} from 'react-router';
import {EmailSignInForm} from 'redux-auth-candorhub';

import * as actionCreators from '../../../action_creators';


export const SignIn = React.createClass({

//redux auth form component
  render: function() {
    return (
      <div className="form__sign-in-container">
        <h3 className="form__splash-header">Log In</h3>
        <EmailSignInForm icon={''} />
      </div>
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
