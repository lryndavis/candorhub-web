import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import React from 'react';
import {connect} from 'react-redux';
import {hashHistory, Link} from 'react-router';

import * as actionCreators from '../../../action_creators';
import ImageModal from '../dashboard/ImageModal';
import Sidebar from '../sidebar/Sidebar';
import UserSearchBar from './UserSearchBar';
import DashboardNotSignedIn from '../../../../src/components/body/dashboard/DashboardNotSignedIn';


// gallery for viewing works by currently logged in user

export const UserGallery = React.createClass({

  componentDidMount: function() {
    this.props.getImagesByUser();
  },

  componentWillUpdate(nextProps) {
    if (!nextProps.signedIn) {
      hashHistory.push("/");
    }
  },

  render: function() {
    return <div>
      { this.props.signedIn ?
        <div className="gallery__main-container">
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <Sidebar username={this.props.username} />
          </MuiThemeProvider>
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <UserSearchBar imagesByUser={this.props.imagesByUser} />
          </MuiThemeProvider>
        </div> :
        <DashboardNotSignedIn />
      }
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    signedIn: state.auth.getIn(["user", "isSignedIn"]),
    imagesByUser: state.imageGallery.imagesByUser,
    username: state.auth.getIn(["user", "attributes", "username"])
  };
}

export const UserGalleryContainer = connect(
  mapStateToProps,
  actionCreators
)(UserGallery);
