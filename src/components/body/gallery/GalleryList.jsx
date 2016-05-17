import Infinite from 'react-infinite';
import React from 'react';
import {connect} from 'react-redux';
import { Router, Route, Link } from 'react-router';

import GalleryThumbnail from './GalleryThumbnail';
import GalleryView from './GalleryView';



export default React.createClass({

  getInitialState: function() {
      return {
          elements: this.buildElements(0, 10),
          isInfiniteLoading: false
      }
  },

  buildElements: function(start, end) {
      var elements = [];
      for (var i = start; i < end; i++) {
          elements.push(<GalleryThumbnail key={i} index={i}/>)
      }
      return elements;
  },

  handleInfiniteLoad: function() {
      var that = this;
      this.setState({
          isInfiniteLoading: true
      });
      setTimeout(function() {
          var elemLength = that.state.elements.length,
              newElements = that.buildElements(elemLength, elemLength + 1000);
          that.setState({
              isInfiniteLoading: false,
              elements: that.state.elements.concat(newElements)
          });
      }, 200);
  },

  elementInfiniteLoad: function() {
      return <div className="infinite-list-item">
          Loading...
      </div>;
  },

  render: function() {
    var imageGalleryRender = this.props.imagesForGallery.map(function(image) {
    return (
      <div className="infinite-list-item" key={image.id}>
        <Link to={`/gallery/${image.id}`} params={{id: image.id}}>
          <GalleryThumbnail image={image} />
        </Link>
      </div>
    );
  });
  return (
    <div className="image-gallery infinite-list-item">
      <h2 className="gallery-header">Gallery</h2>
        <Infinite elementHeight={300}
                         containerHeight={window.innerHeight}
                         infiniteLoadBeginEdgeOffset={2000}
                         onInfiniteLoad={this.handleInfiniteLoad}
                         loadingSpinnerDelegate={this.elementInfiniteLoad()}
                         isInfiniteLoading={this.state.isInfiniteLoading}
                         timeScrollStateLastsForAfterUserScrolls={2000}
                         useWindowAsScrollContainer
                         >
      {imageGalleryRender}
       </Infinite>
    </div>
    );
  }
});
