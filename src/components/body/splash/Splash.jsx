import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import * as actionCreators from '../../../action_creators';
import {SignInContainer} from './SignIn';
import SignUp from './SignUp';


export const Splash = React.createClass({

  render: function() {
    return (
      <div className="container">
        <MuiThemeProvider muiTheme={getMuiTheme()}>
         <SignUp />
        </MuiThemeProvider>
        <SignInContainer />
      </div>
    )
  }
});

function mapStateToProps(state) {
  return {
    signedIn: state.signedIn
  };
}
