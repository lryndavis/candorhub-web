import React from 'react';
import ReactDOM from 'react-dom';
import Critique from './components/body/Critique'

//dummy data for use until API is set up
const imageUrl = 'http://obeythekitty.com/wp-content/uploads/2015/01/lolcat_airplane.jpg'

ReactDOM.render(
  <Critique imageUrl={imageUrl} />,
  document.getElementById('app')
);
