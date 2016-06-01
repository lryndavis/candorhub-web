import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import $ from 'jquery';
import React from 'react';
import { Router, Route, Link } from 'react-router';
import {connect} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import * as actionCreators from '../../../action_creators';
import ImageModal from '../dashboard/ImageModal';
import GalleryQuestionList from './GalleryQuestionList';
import Sidebar from '../sidebar/Sidebar';
import GalleryNoComments from './GalleryNoComments';
import { GalleryCommentFormContainer } from './GalleryCommentForm';
import {authorInComments} from '../../../lib/CommentAuthorCheck';

export const GalleryView = React.createClass({

  componentDidMount: function() {
    let id = this.props.params.id;
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

  deleteImage: function() {
    console.log(this.props.imageById);
    this.props.postDeleteImage(this.props.imageById.id);
  },

  render: function() {
    return (
      <div className="dashboard__main-container">
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Sidebar username={this.props.username} />
        </MuiThemeProvider>

        <div className="dashboard">

          <div className="dashboard__image-container col-md-6">
            <MuiThemeProvider muiTheme={getMuiTheme()}>
              <ImageModal image={this.props.imageById} />
            </MuiThemeProvider>

            {(this.props.imageById.user.id === this.props.currentUserId) ?
              <p className="gallery__delete-this" onClick={this.deleteImage}>Delete This Work</p>
              : authorInComments(this.props.imageById, this.props.currentUserId) ?
              <p className="gallery__already-commented">You've already commented on this artwork!</p>
              : <p className="gallery__critique-this" onClick={this.onClick}>Critique This Work</p>
            }
          </div>

          {((this.props.imageById.user.id === this.props.currentUserId) || authorInComments(this.props.imageById, this.props.currentUserId))
            ? <GalleryQuestionList imageById={this.props.imageById} /> :
            <div className="dashboard__comment-form-container col-md-6">
              { this.state.commentFormShow ?
              <MuiThemeProvider muiTheme={getMuiTheme()}>
                <GalleryCommentFormContainer callbackParent={this.onChildChanged} commentFormShow ={this.state.commentFormShow} questionsForComment={this.props.questionsForComment} />
              </MuiThemeProvider>
              :
              <GalleryQuestionList imageById={this.props.imageById} />
              }
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
      questionsForComment: state.comments.questionsForComment,
      username: state.auth.getIn(["user", "attributes", "username"]),
      currentUserId: state.auth.getIn(["user", "attributes", "id"])
    };
  }

  export const GalleryViewContainer = connect(
    mapStateToProps,
    actionCreators
  )(GalleryView);
