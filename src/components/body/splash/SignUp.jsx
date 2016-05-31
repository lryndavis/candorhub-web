import TextField from 'material-ui/TextField';
import React from 'react';
import {connect} from 'react-redux';
import {EmailSignUpForm} from 'redux-auth-candorhub';


//redux auth form component
export default React.createClass({
  render: function() {
    return (
      <div>
        <h3 className="form__splash-header">Join candorhub</h3>
        <EmailSignUpForm icon={''} />
      </div>
    );
  }
});
