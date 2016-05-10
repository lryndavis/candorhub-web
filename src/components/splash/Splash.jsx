import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../action_creators';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';


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
    signedIn: state.get('signedIn')
  };
}
