import ReactInfiniteScroll from 'react-infinite-scroll';
const InfiniteScroll = ReactInfiniteScroll(React);
import Masonry from 'react-masonry-component';
import React from 'react';
import {connect} from 'react-redux';
import { Router, Route, Link } from 'react-router';

import GalleryThumbnail from './GalleryThumbnail';
import GalleryView from './GalleryView';


const masonryOptions = {
    transitionDuration: 1000,
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item',
    gutter: '.gutter-sizer'
};

export default React.createClass({

  render: function() {
    var showImages = this.props.imagesForGallery;
    var imageGalleryRender = showImages.map(function(image) {
    return (
      <div key={image.id} className="grid-sizer">
        <div className="gutter-sizer">
          <Link to={`/gallery/${image.id}`} params={{id: image.id}}>
            <img className="grid-item" src={image.image}></img>
          </Link>
        </div>
      </div>
    );
  });
  return (
    <div className="image-gallery container">
      <Masonry
              options={masonryOptions}
              disableImagesLoaded={false}
              className={"image-gallery"}
        >
        {imageGalleryRender}
      </Masonry>
    </div>
    );
  }
});
