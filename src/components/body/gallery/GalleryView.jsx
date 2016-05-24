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

  getInitialState: function() {
    return { commentFormShow: false};
  },

  onClick: function() {
    if (this.state.commentFormShow) {
      this.setState({commentFormShow: false});
    } else {
      this.setState({commentFormShow: true});
    }
  },

  onChildChanged: function(newState) {
    this.setState({ commentFormShow: newState });
  },

  render: function() {

    return (
      <div className="gallery__view-container">
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Sidebar username={this.props.username} />
        </MuiThemeProvider>
        <div className="dashboard">
          <div className="dashboard__image-container col-md-6">
            <MuiThemeProvider muiTheme={getMuiTheme()}>
              <ImageModal image={this.props.imageById} />
            </MuiThemeProvider>
            <h2 onClick={this.onClick}>Would you like to comment on this?</h2>
          </div>
          <div className="dashboard__comment-form-container col-md-6">
            { this.state.commentFormShow ?
            <MuiThemeProvider muiTheme={getMuiTheme()}>
              <GalleryCommentFormContainer callbackParent={this.onChildChanged} commentFormShow ={this.state.commentFormShow} questionsForComment={this.props.questionsForComment} />
            </MuiThemeProvider> :
            <GalleryQuestionList imageById={this.props.imageById} />
            }
          </div>
    </div>
  </div>
    );
  }
});



function mapStateToProps(state) {
  return {
    imageById: state.imageGallery.imageById,
    questionsForComment: state.comments.questionsForComment,
    username: state.auth.getIn(["user", "attributes", "username"])
  };
}

export const GalleryViewContainer = connect(
  mapStateToProps,
  actionCreators
)(GalleryView);
