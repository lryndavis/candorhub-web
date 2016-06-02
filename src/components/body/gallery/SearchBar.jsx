import React from 'react';
import SearchInput, {createFilter} from 'react-search-input';
import Infinite from 'react-infinite';
import Masonry from 'react-masonry-component';
import { Router, Route, Link } from 'react-router';

const keysToFilters = ['user.username', 'tags.body', 'title']

const masonryOptions = {
    transitionDuration: 500,
    gutter: 15,
    fitWidth: true,
  };

function imagesLoaded(parentNode) {
  const imgElements = parentNode.querySelectorAll('img');
  for (var i = 0; i < imgElements.length; i++) {
    if (!(imgElements[i].complete)) {
      return false;
    }
  }
  return true;
}

export default React.createClass({

  getInitialState() {
    return {
      searchTerm: '',
      elements: this.buildElements(0, 15),
      isInfiniteLoading: false,
      loading: true
    }
  },

  handleImageChange() {
    const galleryElement = this.refs.gallery;
    this.setState({
      loading: !imagesLoaded(galleryElement),
    });
  },

  renderSpinner() {
    if(!this.state.loading) {
      return null;
    }
    return (
      <span>Loading</span>
    );
  },

  searchUpdated(term) {
    this.setState({searchTerm: term})
  },

  //infinite scroll functions
  buildElements: function(start, end) {
      var elements = [];
      for (var i = start; i < end; i++) {
          elements.push(<div className="gallery__link" />)
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
    const self = this;
    const filteredImages = this.props.imagesForGallery.filter(createFilter(this.state.searchTerm, keysToFilters))
    var filteredImageRender = filteredImages.map(function(image){
      return (
        <figure key={image.id} >
            <div className="gallery__link">
              <Link to={`/gallery/${image.id}`} params={{id: image.id}}>
                <img className="gallery__item" src={image.image_small}
                  onLoad={self.handleImageChange}
                  onError={self.handleImageChange}
                  >
                </img>
                <figcaption>
                  <h3 className="gallery__title-hover">{image.title}</h3>
                  {image.user ? <span className="gallery__caption-hover">by {image.user.username}</span> : null}
                  <span className="gallery__comments-hover">{image.comment_count} Critiques</span>
                </figcaption>
              </Link>
            </div>
          </figure>
        );
      });
      return (
        <div className="gallery__images" ref="gallery">
          <div className="gallery__header-search">
            <SearchInput className="search-input" placeholder="Search candorhub" onChange={this.searchUpdated} />
            <h2 className="gallery__header">Browse Artwork</h2>
            {this.renderSpinner()}
          </div>
          <Infinite elementHeight={2000}
                             infiniteLoadBeginEdgeOffset={10000}
                             onInfiniteLoad={this.handleInfiniteLoad}
                             loadingSpinnerDelegate={this.elementInfiniteLoad()}
                             isInfiniteLoading={this.state.isInfiniteLoading}
                             timeScrollStateLastsForAfterUserScrolls={1000}
                             useWindowAsScrollContainer
                             >
            <Masonry
                    options={masonryOptions}
                    disableImagesLoaded={false}
                    className={"gallery__images"}
              >
            {filteredImageRender}
          </Masonry>
        </Infinite>
      </div>
      );
    }
  });
