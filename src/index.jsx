import React from 'react';
import ReactDOM from 'react-dom';
import Critique from './components/body/Critique'

//dummy data for use until API is set up
const image = {
  url: 'http://obeythekitty.com/wp-content/uploads/2015/01/lolcat_airplane.jpg',
  title: 'Airplane Lolcat',
  description: 'This kitty thinks it is an airplane!'
};

ReactDOM.render(
  <Critique image={image} />,
  document.getElementById('app')
);
