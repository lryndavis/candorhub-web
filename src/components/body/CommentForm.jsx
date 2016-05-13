import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../action_creators';
import $ from 'jquery';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {doesNotUseOffensiveLanguage, usesConstructiveLanguage, isCorrectLength} from '../../lib/CommentValidation';

import Critique from './Critique';
import CritiqueNotSignedIn from './CritiqueNotSignedIn';
import CritiqueImage from './CritiqueImage';
import QuestionList from './QuestionList';

//Status codes for comment status
const WRONG_LENGTH = 11;
const OFFENSIVE = 22;
const NOT_CONSTRUCTIVE = 33;
const OKAY = 44;
const NOT_STARTED = 55;

//Feedback for comment error hints
const feedbackWrongLength = "Comments must be between 10 and 100 characters.";
const feedbackOffensive = "This comment does not appear constructive due to its use of offensive language.";
const feedbackNotConstructive = "This comment does not appear constructive due to its extreme negativity.";

export const CommentForm = React.createClass ({

  getInitialState: function() {
    return {username: '',
      firstResponse: '',
      secondResponse: '',
      thirdResponse: '',
      firstResponseStatus: NOT_STARTED,
      secondResponseStatus: NOT_STARTED,
      thirdResponseStatus: NOT_STARTED,
      readyToSubmit: false
    };
  },

  getErrorHint: function(status) {
    switch(status) {
      case WRONG_LENGTH: return feedbackWrongLength;
      case OFFENSIVE: return feedbackOffensive;
      case NOT_CONSTRUCTIVE: return feedbackNotConstructive;
      default: return "";
    }
  },

  componentDidMount: function() {
    this.props.getQuestionsForComment(this.props.state);
  },

  handleFirstResponseChange: function(e) {
    this.setState({firstResponse: e.target.value});
    if (!doesNotUseOffensiveLanguage(e.target.value)) {
      this.setState({firstResponseStatus: OFFENSIVE});
      this.setState({readyToSubmit: false});

    } else if (!usesConstructiveLanguage(e.target.value)) {
      this.setState({firstResponseStatus: NOT_CONSTRUCTIVE});
      this.setState({readyToSubmit: false});

    } else if (!isCorrectLength(e.target.value)) {
      this.setState({firstResponseStatus: WRONG_LENGTH});
      this.setState({readyToSubmit: false});

    } else {
      this.setState({firstResponseStatus: OKAY});
      if (this.state.secondResponseStatus === OKAY && this.state.thirdResponseStatus === OKAY) {
        this.setState({readyToSubmit: true});
      }
    }
  },

  handleSecondResponseChange: function(e) {
    this.setState({secondResponse: e.target.value});
    if (!doesNotUseOffensiveLanguage(e.target.value)) {
      this.setState({secondResponseStatus: OFFENSIVE});
      this.setState({readyToSubmit: false});

    } else if (!usesConstructiveLanguage(e.target.value)) {
      this.setState({secondResponseStatus: NOT_CONSTRUCTIVE});
      this.setState({readyToSubmit: false});

    } else if (!isCorrectLength(e.target.value)) {
      this.setState({secondResponseStatus: WRONG_LENGTH});
      this.setState({readyToSubmit: false});

    } else {
      this.setState({secondResponseStatus: OKAY});
      if (this.state.firstResponseStatus === OKAY && this.state.thirdResponseStatus === OKAY) {
        this.setState({readyToSubmit: true});
      }
    }
  },

  handleThirdResponseChange: function(e) {
    this.setState({thirdResponse: e.target.value});
    if (!doesNotUseOffensiveLanguage(e.target.value)) {
      this.setState({thirdResponseStatus: OFFENSIVE});
      this.setState({readyToSubmit: false});

    } else if (!usesConstructiveLanguage(e.target.value)) {
      this.setState({thirdResponseStatus: NOT_CONSTRUCTIVE});
      this.setState({readyToSubmit: false});

    } else if (!isCorrectLength(e.target.value)) {
      this.setState({thirdResponseStatus: WRONG_LENGTH});
      this.setState({readyToSubmit: false});

    } else {
      this.setState({thirdResponseStatus: OKAY});
      if (this.state.firstResponseStatus === OKAY && this.state.secondResponseStatus === OKAY) {
        this.setState({readyToSubmit: true});
      }
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var firstResponse = this.state.firstResponse;
    var secondResponse = this.state.secondResponse;
    var thirdResponse = this.state.thirdResponse;
    if (!firstResponse || !secondResponse || !thirdResponse) {
      return;
    }
    //server request
    var body = {
      "image_id": this.props.imageForCritique.id,
      "comments": [{
          "question_id": this.props.questionsForComment[0].id,
          "body": firstResponse.toString()
        }, {
          "question_id": this.props.questionsForComment[1].id,
          "body": secondResponse.toString()
        }, {
          "question_id": this.props.questionsForComment[2].id,
          "body": thirdResponse.toString()
        }]
      };
    this.props.postSubmitComment(body);
  },

  render: function() {
    return (<div>
      {
        this.props.showForm ?
          <form className="commentForm" onSubmit={this.handleSubmit}>
            <h2 className="daily-candor-heading">Your Daily Candor</h2>
            <p className="question-body">{this.props.firstQuestion.body}</p>
            <TextField
              hintText="Your Critique"
              errorText={this.getErrorHint(this.state.firstResponseStatus)}
              value={this.state.firstResponse}
              onChange={this.handleFirstResponseChange}
              fullWidth={true}
              multiLine={true}
            /><br />
            <br />
            <p>{this.props.secondQuestion.body}</p>
            <TextField
              hintText="Your Critique"
              errorText={this.getErrorHint(this.state.secondResponseStatus)}
              value={this.state.secondResponse}
              onChange={this.handleSecondResponseChange}
              fullWidth={true}
              multiLine={true}
            /><br />
            <br />
            <p>{this.props.thirdQuestion.body}</p>
            <TextField
              hintText="Your Critique"
              errorText={this.getErrorHint(this.state.thirdResponseStatus)}
              value={this.state.thirdResponse}
              onChange={this.handleThirdResponseChange}
              fullWidth={true}
              multiLine={true}
            /><br />
            <br />
            <button type="submit"
              className="submit-button"
              disabled={!this.state.readyToSubmit}>Post</button>
          </form> :
          <div>
            <QuestionList imageForCritique={this.props.imageForCritique}/>
          </div>
      }
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    signedIn: state.signedIn,
    imageForCritique: state.imageForCritique,
    firstQuestion: state.questionsForComment[0],
    secondQuestion: state.questionsForComment[1],
    thirdQuestion: state.questionsForComment[2],
    showForm: state.showCommentForm,
    displayComments: state.displayComments
  };
}

export const CommentFormContainer = connect(
  mapStateToProps,
  actionCreators
)(CommentForm);
