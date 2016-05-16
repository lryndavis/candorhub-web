import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actionCreators from '../../../action_creators';

export const SignIn = React.createClass({
  render: function() {
    return (
      <div className="sign-in">
        <Link ref="signIn"
          className="signInLink"
          to={'/dashboard'}
          onClick={() => this.props.signIn()}>
          Sign In
        </Link>
      </div>
    )
  }
});

function mapStateToProps(state) {
  return {
    signedIn: state.signedIn
  };
}

export const SignInContainer = connect(
  mapStateToProps,
  actionCreators
)(SignIn);
