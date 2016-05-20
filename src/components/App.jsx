import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {AuthGlobals} from 'redux-auth/bootstrap-theme';

injectTapEventPlugin();

export default React.createClass({

  render: function() {
    return (
      <div>
        <AuthGlobals />
        {this.props.children}
      </div>
    );
  }
});
