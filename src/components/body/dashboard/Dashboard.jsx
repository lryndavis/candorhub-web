import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actionCreators from '../../../action_creators';
import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Sidebar from '../sidebar/Sidebar';
import DashboardNotSignedIn from './DashboardNotSignedIn';
import DashboardImage from './DashboardImage';
import { CommentFormContainer } from './CommentForm';
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
                  <DashboardImage image={this.props.imageForCritique} />
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
    signedIn: state.signedIn,
    imageForCritique: state.imageForCritique,
    questionsForComment: state.questionsForComment
  };
}

export const DashboardContainer = connect(
  mapStateToProps,
  actionCreators
)(Dashboard);
