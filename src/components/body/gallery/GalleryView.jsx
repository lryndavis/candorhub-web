import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import $ from 'jquery';
import React from 'react';
import { Router, Route, Link } from 'react-router';
import {connect} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import * as actionCreators from '../../../action_creators';
import DashboardImage from '../dashboard/DashboardImage';
import GalleryQuestionList from './GalleryQuestionList';
import Sidebar from '../sidebar/Sidebar';


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
        <div className="critique-container">
          <div className="col-md-8 image-info-container">
            <DashboardImage image={this.props.imageById} />
          </div>
          <div className="col-md-4 comment-form-container">
            <GalleryQuestionList imageById={this.props.imageById} />
          </div>
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
