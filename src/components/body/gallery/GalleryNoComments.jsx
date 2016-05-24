import React from 'react';
  import { GalleryCommentFormContainer } from './GalleryCommentForm';

export default React.createClass({
  render: function() {
    return <div className="gallery__no-comments">
      <h2 className="gallery__no-comments">This art hasn't been critiqued yet!</h2>
    </div>;
  }
})
