import Infinite from 'react-infinite';
import Masonry from 'react-masonry-component';
import React from 'react';
import {connect} from 'react-redux';
import { Router, Route, Link } from 'react-router';

import GalleryView from './GalleryView';


const masonryOptions = {
    transitionDuration: 0,
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item',
    gutter: '.gutter-sizer'
};

  export default React.createClass({

    getInitialState: function() {
        return {
            elements: this.buildElements(0, 15),
            isInfiniteLoading: false
        }
    },

    buildElements: function(start, end) {
        var elements = [];
        for (var i = start; i < end; i++) {
            elements.push(<div className="grid-sizer" />)
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
        }, 500);
    },

    elementInfiniteLoad: function() {
        return <div className="infinite-list-item">
            Loading...
        </div>;
    },

  render: function() {
    var imageGalleryRender = this.props.imagesForGallery.map(function(image) {
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
      <Infinite elementHeight={1000}
                         infiniteLoadBeginEdgeOffset={7000}
                         onInfiniteLoad={this.handleInfiniteLoad}
                         loadingSpinnerDelegate={this.elementInfiniteLoad()}
                         isInfiniteLoading={this.state.isInfiniteLoading}
                         timeScrollStateLastsForAfterUserScrolls={1000}
                         useWindowAsScrollContainer
                         >
        <Masonry
                options={masonryOptions}
                disableImagesLoaded={false}
                className={"image-gallery"}
          >
          {imageGalleryRender}
        </Masonry>
      </Infinite>
    </div>
    );
  }
});
