import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import React from 'react';
import {connect} from 'react-redux';
import {hashHistory, Link} from 'react-router';

import * as actionCreators from '../../../action_creators';
import ProfileSearchBar from './ProfileSearchBar';
import Sidebar from '../sidebar/Sidebar';


// gallery for viewing works by a specific user

export const ProfileGallery = React.createClass({

  componentDidMount: function() {
    var id = this.props.params.id;
    this.props.getImagesBySpecificUser(id);
  },

  render: function() {
    return <div>
            <div className="gallery__main-container">
              <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Sidebar username={this.props.username} />
              </MuiThemeProvider>
              <MuiThemeProvider muiTheme={getMuiTheme()}>
                <ProfileSearchBar imagesBySpecificUser={this.props.imagesBySpecificUser} />
              </MuiThemeProvider>
            </div>
          </div>;
        }
      });

      function mapStateToProps(state) {
        return {
          imagesBySpecificUser: state.imageGallery.imagesBySpecificUser
        };
      }

      export const ProfileGalleryContainer = connect(
        mapStateToProps,
        actionCreators
      )(ProfileGallery);
