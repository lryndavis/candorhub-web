import React from 'react';

export default React.createClass({
  getImageUrl() {
    return this.props.image.image || [];
  },

  getImageTitle() {
    return this.props.image.title || [];
  },

  getImageDescription() {
    return this.props.image.description || [];
  },

  render: function() {
    return <div className="critiqueImage">
        <img className="critiqueImageTag" src={this.getImageUrl()} alt={this.getImageDescription()}></img>
        <h1 className="critiqueImageTitle">{this.getImageTitle()}</h1>
        <p className="critiqueImageDescription">{this.getImageDescription()}</p>
      </div>;
  }
})
