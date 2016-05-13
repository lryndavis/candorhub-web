import React from 'react';
import GalleryThumbnail from './GalleryThumbnail';
import GalleryView from './GalleryView';
import { Router, Route, Link } from 'react-router';
import {connect} from 'react-redux';

export default React.createClass({

  render: function() {
    var imageGalleryRender = this.props.imagesForGallery.map(function(image) {
    return (
      <div key={image.id}>
        <Link to={`/gallery/${image.id}`}>
          <GalleryThumbnail image={image} />
        </Link>
      </div>
    );
  });
  return (
    <div>
      <h2 className="gallery">Gallery</h2>
      {imageGalleryRender}
    </div>
    );
  }
});
