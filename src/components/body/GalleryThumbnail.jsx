import React from 'react';
import GalleryList from './GalleryList';

export default React.createClass({

  getImageUrl() {
    return this.props.image.image || [];
  },

  getImageTitle() {
    this.props.image.title || [];
  },

  getImageDescription() {
    return this.props.image.description || [];
  },

  render: function(){
    return <div className="gallery-thumbnail">
        <img className="critiqueImageTag" src={this.getImageUrl()} alt={this.getImageDescription()}></img>
        <p className="critiqueImageTitle">{this.getImageTitle()}</p>
        <p className="critiqueImageDescription">{this.getImageDescription()}</p>
      </div>;
    }
  })
