import React from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';


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

    this.setState({username: '', email: '', password: '', passwordConfirm: ''});
  },

  render: function() {
    return (
      <form className="sign-up-form" onSubmit={this.handleSubmit}>
        <p className="tag-line">Join Candorhub</p>
          <TextField
            className="usernameTextField"
            hintText="Your Username"
            value={this.state.username}
            onChange={this.handleUsernameChange}
            /><br />
            <br />
          <TextField
            className="emailTextField"
            hintText="Your Email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            /><br />
            <br />
          <TextField
            className="passwordTextField"
            hintText="Your Password"
            floatingLabelText="Password"
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            /><br />
            <br />
          <TextField
            className="passwordConfirmTextField"
            hintText="Confirm Password"
            floatingLabelText="Confirm Password"
            type="password"
            value={this.state.passwordConfirm}
            onChange={this.handlePasswordConfirmChange}
            /><br />
            <br />
        <input className="sign-up-button" type="submit" value="JOIN" />
      </form>
    );
  }
});
