import TextField from 'material-ui/TextField';
import React from 'react';
import {connect} from 'react-redux';
import {EmailSignUpForm} from 'redux-auth';


export default React.createClass({
  // getInitialState: function() {
  //   return {username: '', email: '', password: '', passwordConfirm: ''};
  // },
  // handleUsernameChange: function(e) {
  //   this.setState({username: e.target.value});
  // },
  // handleEmailChange: function(e) {
  //   this.setState({email: e.target.value});
  // },
  // handlePasswordChange: function(e) {
  //   this.setState({password: e.target.value});
  // },
  // handlePasswordConfirmChange: function(e) {
  //   this.setState({passwordConfirm: e.target.value});
  // },
  // handleSubmit: function(e) {
  //   e.preventDefault();
  //   var username = this.state.username.trim();
  //   var email = this.state.email.trim();
  //   var password = this.state.password.trim();
  //   var passwordConfirm = this.state.passwordConfirm.trim();
  //   if (!username || !email || !password || !passwordConfirm) {
  //     return;
  //   }
  //
  //   this.setState({username: '', email: '', password: '', passwordConfirm: ''});
  // },

  render: function() {
    return (
      <EmailSignUpForm />
    );
  }
});
