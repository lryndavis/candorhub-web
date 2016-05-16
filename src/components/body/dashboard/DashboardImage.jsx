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
    return <div className="critique-image">
        <img className="critique-image__image" src={this.getImageUrl()} alt={this.getImageDescription()}></img>
        <h1 className="critique-image__image-title">{this.getImageTitle()}</h1>
        <p className="critique-image__image-desc">{this.getImageDescription()}</p>
      </div>;
  }
})
