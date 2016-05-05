import React from 'react';

export default React.createClass({
  getImageUrl() {
    return this.props.image.get('url') || [];
  },

  getImageTitle() {
    return this.props.image.get('title') || [];
  },

  getImageDescription() {
    return this.props.image.get('description') || [];
  },

  render: function() {
    return <div className="critique">
        <img className="critiqueImage" src={this.getImageUrl()} alt={this.getImageDescription()}></img>
        <h1 className="critiqueImageTitle">{this.getImageTitle()}</h1>
        <p className="critiqueImageDescription">{this.getImageDescription()}</p>
      </div>;
  }
})
