import React from 'react';
import {connect} from 'react-redux';
import Sidebar from './Sidebar';
import CritiqueImage from './CritiqueImage';


export default React.createClass({

  render: function() {
    return (
      <div className="main-gallery">
        <h1>This is the gallery</h1>
        <GalleryThumbnail />
      </div>
    );
  }
});
