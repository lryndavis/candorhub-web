import React from 'react';

export default React.createClass({
  getImageUrl() {
    return this.props.imageUrl;
  },
  render: function() {
    return <div className="critique">
        <img src={this.getImageUrl()}></img>
      </div>;
  }
});
