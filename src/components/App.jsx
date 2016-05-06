import React from 'react';

//dummy data for use until API is set up
const image = {
  url: 'http://obeythekitty.com/wp-content/uploads/2015/01/lolcat_airplane.jpg',
  title: 'Airplane Lolcat',
  description: 'This kitty thinks it is an airplane!'
};

export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, {
      imageForCritique: image,
    });
  }
});
