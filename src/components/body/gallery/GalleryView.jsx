import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import $ from 'jquery';
import React from 'react';
import { Router, Route, Link } from 'react-router';
import {connect} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import * as actionCreators from '../../../action_creators';
import ImageModal from '../dashboard/ImageModal';
import GalleryQuestionList from './GalleryQuestionList';
import Sidebar from '../sidebar/Sidebar';
import GalleryNoComments from './GalleryNoComments';
import { GalleryCommentFormContainer } from './GalleryCommentForm';

export const GalleryView = React.createClass({

  componentDidMount: function() {
    var id = this.props.params.id;
    this.props.getImageFromServerById(id);
  },

  render: function() {
    return (
      <div className="gallery__view-container">
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Sidebar />
        </MuiThemeProvider>
        <div className="dashboard">
          <div className="dashboard__image-container col-md-6">
            <MuiThemeProvider muiTheme={getMuiTheme()}>
              <ImageModal image={this.props.imageById} />
            </MuiThemeProvider>
          </div>
          { this.props.imageById.questions.length > 0 ?
          <div className="col-md-6">
            <GalleryQuestionList imageById={this.props.imageById} />
          </div> :
          <div className="dashboard__comment-form-container col-md-6">
            <MuiThemeProvider muiTheme={getMuiTheme()}>
              <GalleryCommentFormContainer questionsForComment={this.props.questionsForComment} />
            </MuiThemeProvider>
          </div>
        }
    </div>
  </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    imageById: state.imageGallery.imageById,
    questionsForComment: state.comments.questionsForComment
  };
}

export const GalleryViewContainer = connect(
  mapStateToProps,
  actionCreators
)(GalleryView);
