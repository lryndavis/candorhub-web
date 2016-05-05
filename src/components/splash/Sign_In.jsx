import React from 'react';

export default React.createClass({
  render: function() {
    return <div className="signIn">
      <button ref="signIn"
        className="signInButton">
        Sign In
      </button>
    </div>;
  }
});
