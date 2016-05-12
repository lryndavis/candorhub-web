import React from 'react';
import GalleryThumbnail from './GalleryThumbnail';
import GalleryView from './GalleryView';


export default React.createClass({

  render: function() {
    var imageGalleryRender = this.props.imagesForGallery.map(function(image) {
    return (
      <div>
        <GalleryThumbnail image={image} />
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
