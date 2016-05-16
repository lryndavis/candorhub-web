import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actionCreators from '../../action_creators';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Sidebar from './Sidebar';
import CritiqueImage from './CritiqueImage';
import CritiqueNotSignedIn from './CritiqueNotSignedIn';
import GalleryList from './GalleryList';


export const Gallery = React.createClass({

  componentDidMount: function() {
    this.props.getMultipleImagesFromServer();
  },

  render: function() {
    return <div>
      { this.props.signedIn ?
        <div className="container">
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <Sidebar />
          </MuiThemeProvider>
        <div className="main-gallery">
          <GalleryList imagesForGallery={this.props.imagesForGallery} />
        </div>
      </div> :
      <CritiqueNotSignedIn />
      }
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    signedIn: state.signedIn,
    imagesForGallery: state.imagesForGallery
  };
}

export const GalleryContainer = connect(
  mapStateToProps,
  actionCreators
)(Gallery);
