import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../action_creators';
import $ from 'jquery';
import { Sentimental } from 'Sentimental';
import { positivity, negativity, analyze } from 'Sentimental';

import Critique from './Critique';
import CritiqueNotSignedIn from './CritiqueNotSignedIn';
import CritiqueImage from './CritiqueImage';

const offensiveWordThreshold = 4;

export const CommentForm = React.createClass ({

  getInitialState: function() {
    return {username: '', firstResponse: '', secondResponse: '', thirdResponse: '',
    firstResponseIsValid: "no", secondResponseIsValid: "no", thirdResponseIsValid: "no"};
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
    if (!username || !firstResponse || !secondResponse || !thirdResponse) {
      return;
    }
    //server request
    this.setState({username: '', firstResponse: '', password: '', passwordConfirm: ''});
  },

  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
          <h1>Your Daily Candor</h1>
          <p>What is this art?</p>
          <input type="text"
            placeholder="What"
            value={this.state.firstResponse}
            onChange={this.handleFirstResponseChange}
            />
          <p>Valid Comment? {this.state.firstResponseIsValid}</p>
          <p>How do you feel about it?</p>
          <input type="text"
            placeholder="What"
            value={this.state.secondResponse}
            onChange={this.handleSecondResponseChange}
            />
          <p>Valid Comment? {this.state.secondResponseIsValid.toString()}</p>
          <p>Is Everything OK?</p>
          <input type="text"
            placeholder="No"
            value={this.state.thirdResponse}
            onChange={this.handleThirdResponseChange}
            />
          <p>Valid Comment? {this.state.thirdResponseIsValid.toString()}</p>
          <input type="submit" value="Post" />
      </form>
    );
  }
});

function doesNotUseOffensiveLanguage(commentText) {
  var noPunctuation = commentText.replace(/[^a-zA-Z ]+/g, ' ').replace('/ {2,}/',' '),
      tokens = noPunctuation.toLowerCase().split(" ");
  for (var i = 0; i < tokens.length; i++) {
    console.log(tokens[i]);
    console.log(negativity(tokens[i]).score);
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
    imageForCritique: state.get('imageForCritique')
  };
}

export const CommentFormContainer = connect(
  mapStateToProps,
  actionCreators
)(CommentForm);
