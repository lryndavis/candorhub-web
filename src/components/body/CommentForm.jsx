import React from 'react';
import {connect} from 'react-redux';

export default React.createClass({
  getInitialState: function() {
    return {username: '', firstResponse: '', secondResponse: '', thirdResponse: ''};
  },
  handleUserChange: function(e) {
    this.setState({user: e.target.value});
  },
  handleFirstResponseChange: function(e) {
    this.setState({firstResponse: e.target.value});
  },
  handleSecondResponseChange: function(e) {
    this.setState({secondResponse: e.target.value});
  },
  handleThirdResponseChange: function(e) {
    this.setState({thirdResponse: e.target.value});
  },

  render: function() {
    return (
      <form className="commentForm">
          <h1>This may or may not be a critique form</h1>
          <p>Username:</p>
          <input type="text"
            placeholder="Your username"
            value={this.state.user}
            onChange={this.handleUserChange}
            />
          <p>This may be a question?</p>
          <input type="text"
            placeholder="What"
            value={this.state.firstResponse}
            onChange={this.handleFirstResponseChange}
            />
          <p>This may be a question?</p>
          <input type="text"
            placeholder="What"
            value={this.state.secondResponse}
            onChange={this.handleSecondResponseChange}
            />
          <p>This may be a question?</p>
          <input type="text"
            placeholder="What"
            value={this.state.thirdResponse}
            onChange={this.handleThirdResponseChange}
            />
          <input type="submit" value="Post" />
      </form>
    );
  }
});
