import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import * as actionCreators from '../../../action_creators';
import { CommentFormContainer } from './CommentForm';
import DashboardImage from './DashboardImage';
import DashboardNotSignedIn from './DashboardNotSignedIn';
import Sidebar from '../sidebar/Sidebar';
import UploadFormModal from '../sidebar/UploadFormModal';


export const Dashboard = React.createClass({

  componentDidMount: function() {
    this.props.getRandomImageFromServer();
  },

  render: function() {
    return <div className="critique">
        { this.props.signedIn ?
            <div className="container">
              <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Sidebar />
              </MuiThemeProvider>
              <div className="critique-container">
              <div className="col-md-8 image-info-container">
                <DashboardImage image={this.props.imageForCritique} />
              </div>
              <div className="col-md-4 comment-form-container">
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
    signedIn: state.signedIn,
    imageForCritique: state.imageForCritique,
    questionsForComment: state.questionsForComment
  };
}

export const DashboardContainer = connect(
  mapStateToProps,
  actionCreators
)(Dashboard);
