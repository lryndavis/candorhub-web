import Masonry from 'react-masonry-component';
import React from 'react';
import {connect} from 'react-redux';
import { Router, Route, Link } from 'react-router';

const masonryOptions = {
    transitionDuration: 700,
    gutter: 15,
    fitWidth: true,
  };

export default React.createClass({
  render: function() {
    var userGalleryRender = this.props.imagesByUser.map(function(image){
      return (
        <div key={image.id} className="gallery-link">
          <Link to={`/gallery/${image.id}`} params={{id: image.id}}>
            <img className="grid-item" src={image.image}></img>
          </Link>
        </div>
      );
    });
    return (
      <div className="image-gallery">
        <Masonry
                options={masonryOptions}
                disableImagesLoaded={false}
                className={"image-gallery"}
          >
          <h1>Your Gallery</h1>
          {userGalleryRender}
        </Masonry>
      </div>
    );
  }
});
