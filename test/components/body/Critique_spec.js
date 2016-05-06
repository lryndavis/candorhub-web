import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import {Map} from 'immutable';
import {Critique} from '../../../src/components/body/Critique';
import {expect} from 'chai';

describe("Critique", () => {
  it("displays correct component for signed-out state", () => {
    const image = Map({
      url: 'http://obeythekitty.com/wp-content/uploads/2015/01/lolcat_airplane.jpg',
      title: 'Airplane Lolcat',
      description: 'This kitty thinks it is an airplane!'
    });
    const signedIn = false;
    const component = renderIntoDocument(
      <Critique signedIn={signedIn} image={image} />
    );
    const renderedText = scryRenderedDOMComponentsWithClass(component, "critiqueNotSignedIn");
    expect(renderedText.length).to.equal(1);
  });

  it("displays correct component for signed-in state", () => {
    const image = Map({
      url: 'http://obeythekitty.com/wp-content/uploads/2015/01/lolcat_airplane.jpg',
      title: 'Airplane Lolcat',
      description: 'This kitty thinks it is an airplane!'
    });
    const signedIn = true;
    const component = renderIntoDocument(
      <Critique signedIn={signedIn} image={image} />
    );
    const renderedImage = scryRenderedDOMComponentsWithClass(component, "critiqueImage");
    expect(renderedImage.length).to.equal(1);
  });
});
