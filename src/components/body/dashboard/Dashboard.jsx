import $ from 'jquery';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import * as actionCreators from '../../../action_creators';
import { CommentFormContainer } from './CommentForm';
import DashboardNotSignedIn from './DashboardNotSignedIn';
import ImageModal from './ImageModal';
import Sidebar from '../sidebar/Sidebar';
import UploadFormModal from '../sidebar/UploadFormModal';


export const Dashboard = React.createClass({

  componentDidMount: function() {
    this.props.getRandomImageFromServer();
  },

  render: function() {
    return <div className="dashboard-component-div">
        { this.props.signedIn ?
            <div className="container">

              <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Sidebar />
              </MuiThemeProvider>

              <div className="dashboard">

                <div className="dashboard__image-container col-md-8 ">
                  <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <ImageModal image={this.props.imageForCritique} />
                  </MuiThemeProvider>
                </div>

                <div className="dashboard__comment-form-container col-md-4">
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
    signedIn: state.signIn.signedIn,
    imageForCritique: state.imageForCritique,
    questionsForComment: state.comments.questionsForComment
  };
}

export const DashboardContainer = connect(
  mapStateToProps,
  actionCreators
)(Dashboard);
