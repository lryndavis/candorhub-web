import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router';

import GalleryList from './GalleryList';
import GalleryView from './GalleryView';


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

  getImageId() {
    return this.props.image.id || [];
  },

  render: function(){
    return <div key={this.getImageId()} className="gallery-thumbnail col-md-6">
        <img className="gallery-thumbnail__image" src={this.getImageUrl()} alt={this.getImageDescription()}></img>
        <h2 className="gallery-thumbnail__title">{this.props.image.title}</h2>
      </div>;
    }
  })
