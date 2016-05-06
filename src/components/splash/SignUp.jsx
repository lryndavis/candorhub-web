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
  handleSubmit: function(e) {
    e.preventDefault();
    var username = this.state.username.trim();
    var email = this.state.email.trim();
    var password = this.state.password.trim();
    var passwordConfirm = this.state.passwordConfirm.trim();
    if (!username || !email || !password || !passwordConfirm) {
      return;
    }
    //server request
    this.setState({username: '', email: '', password: '', passwordConfirm: ''});
  },

  render: function() {
    return (
      <form className="signUpForm" onSubmit={this.handleSubmit}>
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
