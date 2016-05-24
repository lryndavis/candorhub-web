import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import $ from 'jquery';
import React from 'react';
import { Router, Route, Link } from 'react-router';
import {connect} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import * as actionCreators from '../../../action_creators';

import ImageModal from './ImageModal';
import GalleryQuestionList from '../gallery/GalleryQuestionList';
import Sidebar from '../sidebar/Sidebar';
import GalleryNoComments from '../gallery/GalleryNoComments';

export const UserGalleryView = React.createClass({

  componentDidMount: function() {
    var id = this.props.params.id;
    this.props.getImageFromServerById(id);
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
          </div>

          <div className="dashboard__comment-form-container col-md-6">
            <GalleryQuestionList imageById={this.props.imageById} />
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

  export const UserGalleryViewContainer = connect(
    mapStateToProps,
    actionCreators
  )(UserGalleryView);
