import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../action_creators';
import $ from 'jquery';
import { Sentimental } from 'Sentimental';
import { positivity, negativity, analyze } from 'Sentimental';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Critique from './Critique';
import CritiqueNotSignedIn from './CritiqueNotSignedIn';
import CritiqueImage from './CritiqueImage';

const offensiveWordThreshold = 4;

export const CommentForm = React.createClass ({

  getInitialState: function() {
    return {username: '', firstResponse: '', secondResponse: '', thirdResponse: '',
    firstResponseIsValid: "no", secondResponseIsValid: "no", thirdResponseIsValid: "no"};
  },

  componentDidMount: function() {
    this.props.getQuestionsForComment(this.props.state);
  },

  handleFirstResponseChange: function(e) {
    this.setState({firstResponse: e.target.value});
    if (isValidComment(e.target.value)) {
      this.setState({firstResponseIsValid: "yes"});
    } else {
      if (!doesNotUseOffensiveLanguage(e.target.value)) {
        this.setState({firstResponseIsValid: "offensive word"});
      } else if (!usedConstructiveLanguage(e.target.value)) {
        this.setState({firstResponseIsValid: "This may not be useful commentary."});
      } else if (!isCorrectLength(e.target.value)) {
        this.setState({firstResponseIsValid: "wrong length"});
      }
    }
  },
  handleSecondResponseChange: function(e) {
    this.setState({secondResponse: e.target.value});
    if (isValidComment(e.target.value)) {
      this.setState({secondResponseIsValid: "yes"});
    } else {
      if (!doesNotUseOffensiveLanguage(e.target.value)) {
        this.setState({secondResponseIsValid: "offensive word"});
      } else if (!usedConstructiveLanguage(e.target.value)) {
        this.setState({secondResponseIsValid: "This may not be useful commentary."});
      } else if (!isCorrectLength(e.target.value)) {
        this.setState({secondResponseIsValid: "wrong length"});
      }
    }
  },
  handleThirdResponseChange: function(e) {
    this.setState({thirdResponse: e.target.value});
    if (isValidComment(e.target.value)) {
      this.setState({thirdResponseIsValid: "yes"});
    } else {
      if (!doesNotUseOffensiveLanguage(e.target.value)) {
        this.setState({thirdResponseIsValid: "offensive word"});
      } else if (!usedConstructiveLanguage(e.target.value)) {
        this.setState({thirdResponseIsValid: "This may not be useful commentary."});
      } else if (!isCorrectLength(e.target.value)) {
        this.setState({thirdResponseIsValid: "wrong length"});
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
    this.props.postSubmitComment(this.props.state, body);
  },

  render: function() {
    return (<div>
      {
        this.props.showForm ? 
          <form className="commentForm" onSubmit={this.handleSubmit}>
            <h1>Your Daily Candor</h1>
            <p>{this.props.firstQuestion.body}</p>
            <TextField
              hintText="Your Critique"
              value={this.state.firstResponse}
              onChange={this.handleFirstResponseChange}
              fullWidth={true}
              multiLine={true}
            /><br />
            <br />
            <p>Valid Comment? {this.state.firstResponseIsValid}</p>
            <p>{this.props.secondQuestion.body}</p>
            <TextField
              hintText="Your Critique"
              value={this.state.secondResponse}
              onChange={this.handleSecondResponseChange}
              fullWidth={true}
              multiLine={true}
            /><br />
            <br />
            <p>Valid Comment? {this.state.secondResponseIsValid.toString()}</p>
            <p>{this.props.thirdQuestion.body}</p>
            <TextField
              hintText="Your Critique"
              value={this.state.thirdResponse}
              onChange={this.handleThirdResponseChange}
              fullWidth={true}
              multiLine={true}
            /><br />
            <br />
            <p>Valid Comment? {this.state.thirdResponseIsValid.toString()}</p>
            <input type="submit" value="Post" className="submit-button"/>
          </form> :
          <div></div>
      }
      </div>
    );
  }
});

function doesNotUseOffensiveLanguage(commentText) {
  var noPunctuation = commentText.replace(/[^a-zA-Z ]+/g, ' ').replace('/ {2,}/',' '),
      tokens = noPunctuation.toLowerCase().split(" ");
  for (var i = 0; i < tokens.length; i++) {
    if (negativity(tokens[i]).score >= offensiveWordThreshold) {
      return false;
    }
  }
  return true;
}

function usedConstructiveLanguage(commentText) {
  return analyze(commentText).comparative > -0.5;
}

function isCorrectLength(commentText) {
  return (commentText.trim().length >= 10 && commentText.trim().length <= 100);
}

function isValidComment(commentText) {
  return doesNotUseOffensiveLanguage(commentText) && usedConstructiveLanguage(commentText) && isCorrectLength(commentText);
}

function mapStateToProps(state) {
  return {
    signedIn: state.get('signedIn'),
    imageForCritique: state.get('imageForCritique'),
    firstQuestion: state.get('questionsForComment')[0],
    secondQuestion: state.get('questionsForComment')[1],
    thirdQuestion: state.get('questionsForComment')[2],
    showForm: state.get('showCommentForm'),
    displayComments: state.get('displayComments'),
    state: state
  };
}

export const CommentFormContainer = connect(
  mapStateToProps,
  actionCreators
)(CommentForm);
