import React from 'react';
import { Router, Route, Link } from 'react-router';
import {connect} from 'react-redux';
import * as actionCreators from '../../action_creators';
import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Sidebar from './Sidebar';
import CritiqueImage from './CritiqueImage';


export const GalleryView = React.createClass({

componentDidMount: function() {
  var id = this.props.params.id;
  this.props.getImageFromServerById(id);
},

  render() {
    return (
      <div className="container">
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Sidebar />
        </MuiThemeProvider>
        <div className="col-md-8 image-info-container">
          <CritiqueImage image={this.props.imageById} />
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    imageById: state.imageById
  };
}

export const GalleryViewContainer = connect(
  mapStateToProps,
  actionCreators
)(GalleryView);
