import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../action_creators';

import {SignInContainer} from './SignIn';
import SignUp from './SignUp';

export const Splash = React.createClass({

  render: function() {
    return <div>
      <h1>CANDORHUB or something</h1>
      <SignUp />
      <SignInContainer />
      </div>;
    }
});

function mapStateToProps(state) {
  return {
    signedIn: state.get('signedIn')
  };
}
