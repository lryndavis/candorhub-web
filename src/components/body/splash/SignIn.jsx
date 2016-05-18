import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import * as actionCreators from '../../../action_creators';


export const SignIn = React.createClass({
  render: function() {
    return (
      <div className="button button__sign-in">
        <Link ref="signIn"
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
    signedIn: state.signIn.signedIn
  };
}

export const SignInContainer = connect(
  mapStateToProps,
  actionCreators
)(SignIn);
