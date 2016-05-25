import React from 'react';
import SearchInput, {createFilter} from 'react-search-input';
import { Router, Route, Link } from 'react-router';

const KEYS_TO_FILTERS = ['user.username', 'tags.body', 'title']

export default React.createClass({

  getInitialState() {
    return {
      searchTerm: ''
    }
  },

  render() {

    const filteredImages = this.props.imagesForGallery.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        {filteredImages.map(image => {
          return(
            <figure>
                <div key={image.id} className="gallery-link">
                  <Link to={`/gallery/${image.id}`} params={{id: image.id}}>
                    <img className="grid-item" src={image.image}></img>
                    <figcaption>
                      <h3 className="hover-title">{image.title}</h3>
                      <span className="hover-caption">by {image.user.username}</span>
                      <span className="hover-comments">{image.comment_count} Critiques</span>
                    </figcaption>
                  </Link>
                </div>
              </figure>
            )
          })}
        </div>
      )
    },

    searchUpdated(term) {
      this.setState({searchTerm: term})
    }
  })
