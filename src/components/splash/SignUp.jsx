import React from 'react';
import {connect} from 'react-redux';

export default React.createClass({
  getInitialState: function() {
    return {username: '', email: '', password: '', passwordConfirm: ''};
  },
  handleUsernameChange: function(e) {
    this.setState({username: e.target.value});
  },
  handleEmailChange: function(e) {
    this.setState({email: e.target.value});
  },
  handlePasswordChange: function(e) {
    this.setState({password: e.target.value});
  },
  handlePasswordConfirmChange: function(e) {
    this.setState({passwordConfirm: e.target.value});
  },

  render: function() {
    return (
      <form className="signUpForm">
        <p>This may or may not be a form</p>
        <input type="text"
          placeholder="Your Username"
          value={this.state.username}
          onChange={this.handleUsernameChange}
          />
        <input type="text"
          placeholder="Your Email"
          value={this.state.email}
          onChange={this.handleEmailChange}
          />
        <input type="test"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
          />
        <input type="test"
          placeholder="Confirm Password"
          value={this.state.passwordConfirm}
          onChange={this.handlePasswordConfirmChange}
          />
        <input type="submit" value="Post" />
      </form>
    );
  }
});
