import React from 'react';
import {connect} from 'react-redux';

export default React.createClass({
  getInitialState: function() {
    return {value: ''};
  },

  handleChange() {
    this.setState({value: event.target.value});
  },

  render: function() {
    return <div className="sign-up-form">
      <p>This may or may not be a form</p>
      <label>Username:</label>
      <input type="text"
        name="username"
        placeholder="Username"
        value={this.state.value}
        onChange={this.handleChange}
        />
      <label>Email:</label>
      <input type="text"
        name="email"
        placeholder="Email"
        value={this.state.value}
        onChange={this.handleChange}
        />
      <label>Password:</label>
      <input type="text"
        name="password"
        value={this.state.value}
        onChange={this.handleChange}
        />
      <label>Confirm Password:</label>
      <input type="text"
        name="confirm-password"
        value={this.state.value}
        onChange={this.handleChange}
        />
      <button type="submit">Submit</button>
    </div>;
  }
})
