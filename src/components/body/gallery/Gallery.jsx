import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import React from 'react';
import {connect} from 'react-redux';
import {browserHistory, Link} from 'react-router';

import * as actionCreators from '../../../action_creators';
import ImageModal from '../dashboard/ImageModal';
import DashboardNotSignedIn from '../dashboard/DashboardNotSignedIn';
import Sidebar from '../sidebar/Sidebar';
import SearchBar from './SearchBar';


export const Gallery = React.createClass({

  componentDidMount: function() {
    this.props.getMultipleImagesFromServer();
  },

  componentWillUpdate(nextProps) {
    //redirect to splash on sign-out
    if (!nextProps.signedIn) {
      browserHistory.push("/");
    }
  },

  render: function() {
    return <div>
      { this.props.signedIn ?
        <div className="gallery__main-container">
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <Sidebar username={this.props.username} />
          </MuiThemeProvider>
          <div className="search-bar">
            <SearchBar imagesForGallery={this.props.imagesForGallery} />
          </div>
        </div> :
      <DashboardNotSignedIn />
      }
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    signedIn: state.auth.getIn(["user", "isSignedIn"]),
    imagesForGallery: state.imageGallery.imagesForGallery,
    username: state.auth.getIn(["user", "attributes", "username"])
  };
}

export const GalleryContainer = connect(
  mapStateToProps,
  actionCreators
)(Gallery);
