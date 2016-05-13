import React from 'react';

export default React.createClass({

  getImageDescription() {
    return this.props.image.description || [];
  },

  render: function() {
    return <div>
        <p className="critiqueImageDescription">{this.getImageDescription()}</p>
    </div>;
  }
})
