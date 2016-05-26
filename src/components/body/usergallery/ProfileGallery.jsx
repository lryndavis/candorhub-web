import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {connect} from 'react-redux';
import {browserHistory, Link} from 'react-router';
import * as actionCreators from '../../../action_creators';
import Sidebar from '../sidebar/Sidebar';
import ProfileSearchBar from './ProfileSearchBar';

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
              <ProfileSearchBar imagesBySpecificUser={this.props.imagesBySpecificUser} />
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
