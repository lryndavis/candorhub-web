import $ from 'jquery';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import React from 'react';
import {connect} from 'react-redux';
import {hashHistory, Link} from 'react-router';

import * as actionCreators from '../../../action_creators';
import { CommentFormContainer } from './CommentForm';
import DashboardNotSignedIn from './DashboardNotSignedIn';
import ImageModal from './ImageModal';
import Sidebar from '../sidebar/Sidebar';
import UploadFormModal from '../sidebar/UploadFormModal';
import { authorInComments } from '../../../lib/CommentAuthorCheck';

let randomImageAttempts = 0;

export const Dashboard = React.createClass({

  componentDidMount: function() {
    this.props.getRandomImageFromServer();
  },

  componentWillUpdate(nextProps) {
    //redirect to splash on sign-out
    if (!nextProps.signedIn) {
      hashHistory.push("/");
    }
  },

  render: function() {
    return <div>
        { this.props.signedIn ?
            <div className="dashboard__main-container">

              <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Sidebar username={this.props.username}/>
              </MuiThemeProvider>

              <div className="dashboard">

                <div className="dashboard__image-container col-md-6">
                  <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <ImageModal image={this.props.imageForCritique} />
                  </MuiThemeProvider>
                  {this.props.didSubmitComment ?
                    <div className="gallery__commented">
                      <p className="gallery__feedback">Thanks for sharing some candor!</p>
                      <Link to={'/gallery'}><p className="gallery__link-gallery">Browse the gallery to see more artwork</p></Link>
                    </div>

                    : null
                  }
                </div>

                <div className="col-md-6">
                  <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <CommentFormContainer questionsForComment={this.props.questionsForComment} />
                  </MuiThemeProvider>
                </div>

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
    imageForCritique: state.imageForCritique,
    questionsForComment: state.comments.questionsForComment,
    username: state.auth.getIn(["user", "attributes", "username"]),
    userId: state.auth.getIn(["user", "attributes", "id"]),
    didSubmitComment: state.comments.commentSubmitted,
  };
}

export const DashboardContainer = connect(
  mapStateToProps,
  actionCreators
)(Dashboard);
