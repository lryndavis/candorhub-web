import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import {Map} from 'immutable';
import ImageModal from '../../../../src/components/body/dashboard/ImageModal';
import {expect} from 'chai';

describe('ImageModal', () => {

  it('displays an image from a url from an image prop', () => {
    const image = {
      image: 'http://obeythekitty.com/wp-content/uploads/2015/01/lolcat_airplane.jpg',
      title: 'Airplane Lolcat',
      description: 'This kitty thinks it is an airplane!',
      user: {
        username: "aa123"
      }
    };
    const component = renderIntoDocument(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <ImageModal image={image} />
      </MuiThemeProvider>
    );
    const critiqueImage = scryRenderedDOMComponentsWithTag(component, "img");
    expect(critiqueImage[0].hasAttribute('src')).to.be.true;
    expect(critiqueImage[0].hasAttribute('alt')).to.be.true;
  });

  it('displays a title and description from an image prop', () => {
    const image = {
      url: 'http://obeythekitty.com/wp-content/uploads/2015/01/lolcat_airplane.jpg',
      title: 'Airplane Lolcat',
      description: 'This kitty thinks it is an airplane!',
      user: {
        username: "aa123"
      }
    };
    const component = renderIntoDocument(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <ImageModal image={image} />
      </MuiThemeProvider>
    );
    const critiqueImageTitle = scryRenderedDOMComponentsWithClass(component, "form__image-title");
    const critiqueImageDescription = scryRenderedDOMComponentsWithClass(component, "form__image-description");
    expect(critiqueImageTitle[0].textContent).to.contain("Airplane Lolcat");
    expect(critiqueImageDescription[0].textContent).to.contain("This kitty thinks it is an airplane!");
  })

});
