import React from 'react';
import {connect} from 'react-redux';
import { Router, Route, Link } from 'react-router';

import GalleryThumbnail from './GalleryThumbnail';
import GalleryView from './GalleryView';


export default React.createClass({

  render: function() {
    var imageGalleryRender = this.props.imagesForGallery.map(function(image) {
    return (
      <div key={image.id}>
        <Link to={`/gallery/${image.id}`} params={{id: image.id}}>
          <GalleryThumbnail image={image} />
        </Link>
      </div>
    );
  });
  return (
    <div className="image-gallery">
      <h2 className="gallery-header">Gallery</h2>
      {imageGalleryRender}
    </div>
    );
  }
});
