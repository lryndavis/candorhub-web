import TextField from 'material-ui/TextField';
import React from 'react';
import {connect} from 'react-redux';
import {EmailSignUpForm} from 'redux-auth';


export default React.createClass({
  render: function() {
    return (
      <div className="form__sign-up-container">
        <h3 className="form__join-header">Join candorhub</h3>
        <EmailSignUpForm icon={''} />
      </div>
    );
  }
});
