import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../action_creators';
import $ from 'jquery';

import Critique from './Critique';
import CritiqueNotSignedIn from './CritiqueNotSignedIn';
import CritiqueImage from './CritiqueImage';

export const CommentForm = React.createClass ({

  getInitialState: function() {
    return {username: '', firstResponse: '', secondResponse: '', thirdResponse: '',
    firstResponseIsValid: false, secondResponseIsValid: false, thirdResponseIsValid: false};
  },
  handleUserChange: function(e) {
    this.setState({user: e.target.value});
  },
  handleFirstResponseChange: function(e) {
    this.setState({firstResponse: e.target.value});
    this.setState({firstResponseIsValid: true});
  },
  handleSecondResponseChange: function(e) {
    this.setState({secondResponse: e.target.value});
    this.setState({secondResponseIsValid: true});
  },
  handleThirdResponseChange: function(e) {
    this.setState({thirdResponse: e.target.value});
    this.setState({secondResponseIsValid: true});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var username = this.state.username.trim();
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
          <p>Username:</p>
          <input type="text"
            placeholder="Your username"
            value={this.state.user}
            onChange={this.handleUserChange}
            />
          <p>What is this? </p>
          <input type="text"
            placeholder="What"
            value={this.state.firstResponse}
            onChange={this.handleFirstResponseChange}
            />
          <p>Valid Comment? {this.state.firstResponseIsValid.toString()}</p>
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
