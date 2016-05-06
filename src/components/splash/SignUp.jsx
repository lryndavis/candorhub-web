import React from 'react';
import {connect} from 'react-redux';

export default React.createClass({

  render: function() {
    return <div className="sign-up">
      <p>This may or may not be a form</p>
      <label>Username:</label>
      <input type="text" />
      <label>Email:</label>
      <input type="text" />
      <label>Password:</label>
      <input type="text" />
      <label>Confirm Password:</label>
      <input type="text"></input>
      <button type="submit">Submit</button>
    </div>;
  }
})
