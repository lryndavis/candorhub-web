import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../action_creators';
import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Sidebar from './Sidebar';
import CritiqueNotSignedIn from './CritiqueNotSignedIn';
import CritiqueImage from './CritiqueImage';
import { CommentFormContainer } from './CommentForm';

export const Critique = React.createClass({

  componentDidMount: function() {
    this.props.getRandomImageFromServer();
  },


  render: function() {
    return <div className="critique">
        { this.props.signedIn ?
          <div className="container">
            <div className="col-md-8 image-info-container">
              <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Sidebar />
              </MuiThemeProvider>
              <CritiqueImage image={this.props.imageForCritique} />
            </div>
            <div className="col-md-4 comment-form-container">
              <MuiThemeProvider muiTheme={getMuiTheme()}>
                <CommentFormContainer questionsForComment={this.props.questionsForComment} />
              </MuiThemeProvider>
            </div>
          </div> :
          <CritiqueNotSignedIn />
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

export const CritiqueContainer = connect(
  mapStateToProps,
  actionCreators
)(Critique);
